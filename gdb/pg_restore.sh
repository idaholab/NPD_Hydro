$Container = Read-Host "Enter the kubenetes database container's name:"

kubectl cp ./gdb/data/prod.sql hydro-npd-dev/$Container:/var/lib/postgresql/data
kubectl exec psql --user postgres postgres < /var/lib/postgresql/data/pg_dump.sql