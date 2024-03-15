### The Django App

This `README` contains information related to just the Django application.

Follow instructions in the root directory `README.md` to launch the NPD HYDRO application altogether.

### Production

In production, this application is built to run on Kubernetes.

#### A note on Django migrations

##### The NPD Database

The NPD database is ephemeral - it is torn down and stood back up on each deployment. This workflow was selected because the source data is always received as a `.gdb` (ArcGIS database) dump, and the best way to load this data is to convert the database to a UTF-8 `.sql` dump, and execute it against the `npd` database. See the `Upload PostGIS data` stage in the GitHub workflow.

##### The Questionnaire Database

The Questionnaire database is retained across deployments. This is because it contains user input from the application's questionnaire.

In Kubernetes, new migrations on the questionnaire database have to be run manually, or otherwise run by some additional utility / pattern, like a sidecar or an init container. This is because if you include migration commands in the `entrypoint.sh`, there's no guarantee that the questionnaire database pod is alive at that time, and so the migration will not succeed.

In local development, you're welcome to prepend the contents of `questionnaire-migrations.sh` to the `entrypoint.sh`, as the `docker-compose.local.yaml` utilizes a `depends_on` instruction, requiring the database to be alive before the django app is launched

To run new migrations for production, you have to get on the jumpbox, shell into the Django pod, and run `questionnaire-migrations.sh`.
