### Loading the data into Postgres

## Production

You need to run these commands using the **production** credentials, so as to build and authenticate the database the same locally as is expected in the production container.

Retrieve `user`, `password`, and `database_name` from `nathan.woodruff@inl.gov` or another architect. These secrets are only viewable on the cluster itself.

The workflow looks something like this:

1. Run the OSGeo4W utility to transform the `.gdb` into a readable stream for PostGIS:
   `ogr2ogr -overwrite -t_srs "EPSG:4326" -f "PostgreSQL" PG:"host=localhost user={user} dbname={database_name} password={password}" -nlt CONVERT_TO_LINEAR -nlt PROMOTE_TO_MULTI "C:\path\to\NLPr_Tool.gdb.zip"`
2. Shell into the Django container and run `python manage.py inspectdb --database={database_name} > ./server/nlpr/models.py`. This dumps the PostgreSQL schema from the database you just loaded into a models file called `models.py`. The `inspectdb` command isn't perfect, you'll have to fix some issues. Look at the Django console, it will tell you what to do. A lot of the models reference metadata that isn't of any use - try deleting them first, it should resolve most of the issues. You can check which models are expected by looking at `/server/nlpr/views.py`, and of course keep any new models you might be tasked with adding.
3. Run the Postgres `pg_dump` command using the production credentials:
   `docker exec -it container-name pg_dump --user {user} {database_name} --encoding utf8 --create --if-exists --clean --inserts > ./data/prod.sql`
4. Copy the Postgres dump into the db container:
   `kubectl cp ./gdb/data/prod.sql hydro-npd-dev/container-name:/var/lib/postgresql/data`
5. Shell into the Postgres container and load the data with the `psql` command, again using the **production** credentials:
   `psql --user {user} {database_name} < prod.sql`
