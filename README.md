### Development

#### Docker

This application runs in Docker. There are 5 containers for development.

1. A React application
2. A Django application
3. A PostgreSQL database for application data
4. A PostgreSQL database for user form data
5. A PGAdmin container

**Note:** This application uses two database containers for reasons obvious only in production

#### Getting Started

##### Environment

The application environment is already configured through a variety of `.env.local` files. These files contain only local development credentials, and safely live in version control.

##### Docker-Compose

To run this application, follow the below instructions

Enter the `/app` directory and run `npm install`.
Enter the root directory of the application, and run:

1. `docker-compose -f docker-compose.local.yaml build`
2. `docker-compose -f docker-compose.local.yaml up`

Next, to load data into the postgres container, you need the `OSGeo4W` [utility](https://trac.osgeo.org/osgeo4w/).
**Important:** `OSGeo4W` is a Windows utility. I don't know if there are Mac or Linux alternatives.

With the docker-compose stack up and running, open the OSGeo4W application/shell, and run the following command:

```
ogr2ogr -overwrite -t_srs "EPSG:4326" -f "PostgreSQL" PG:"host=localhost user=postgres dbname=data_db password=local" -nlt CONVERT_TO_LINEAR -nlt PROMOTE_TO_MULTI "C:\Users\USER\path\to\database.gdb.zip"
```

**Notes**:
The command uses the username, dbname, and password variables defined the `.env.local` files.
It also targets a _zipped_ `.gdb` file. The shell throws a warning saying it might take a while, but on a tower it only takes about 10 seconds.

Navigate to `http://localhost:3005`

**PGAdmin**

You can navigate to `http://localhost:5050` and enter the credentials from the `/gdb/environment/.env.local.pgadmin` to look at the data in the database.

You'll need to register the server by naming it, and then typing in the required `POSTGRES` credentials from `/gdb/environment/.env.local.npd`.

### Production

##### Kubernetes

This application runs on kubernetes. Take a look at the `/kubernetes` directory for workload information.

You can also play around with the `minikube.yaml`.

##### Deployments

After deploying this application to the cluster, you have to shell into the `npd-django` pod and manually run the `migrations.sh` script. This step is required in lieu of some other streamlined solution, because there's no way for the `npd-django` pod to know about the status of the `npd-questionnaire-db` pod before executing any `entrypoint` scripts.

### Contact

`nathan.woodruff@inl.gov`
