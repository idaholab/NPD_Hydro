# This script, run in the OSGeo4W command line utility, transforms the provided .gdb.zip into a readable stream that pushes data into the target PostGIS SQL database

ogr2ogr -overwrite -t_srs "EPSG:4326" -f "PostgreSQL" PG:"host= user= dbname= password=" -nlt CONVERT_TO_LINEAR -nlt PROMOTE_TO_MULTI "C:\path\to\NLPr_Tool.gdb.zip"