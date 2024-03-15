$Container = Read-Host "Enter the local database container's name"
$User = Read-Host "Enter the database user"
$Database = Read-Host "Enter the database name"

docker exec -it $Container pg_dump --user $User $Database --encoding utf8 --create --if-exists --clean --inserts > ./data/pg_dump.sql