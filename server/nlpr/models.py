# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.contrib.gis.db import models


class Addr(models.Model):
    gid = models.AutoField(primary_key=True)
    tlid = models.BigIntegerField(blank=True, null=True)
    fromhn = models.CharField(max_length=12, blank=True, null=True)
    tohn = models.CharField(max_length=12, blank=True, null=True)
    side = models.CharField(max_length=1, blank=True, null=True)
    zip = models.CharField(max_length=5, blank=True, null=True)
    plus4 = models.CharField(max_length=4, blank=True, null=True)
    fromtyp = models.CharField(max_length=1, blank=True, null=True)
    totyp = models.CharField(max_length=1, blank=True, null=True)
    fromarmid = models.IntegerField(blank=True, null=True)
    toarmid = models.IntegerField(blank=True, null=True)
    arid = models.CharField(max_length=22, blank=True, null=True)
    mtfcc = models.CharField(max_length=5, blank=True, null=True)
    statefp = models.CharField(max_length=2, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'addr'


class Addrfeat(models.Model):
    gid = models.AutoField(primary_key=True)
    tlid = models.BigIntegerField(blank=True, null=True)
    statefp = models.CharField(max_length=2)
    aridl = models.CharField(max_length=22, blank=True, null=True)
    aridr = models.CharField(max_length=22, blank=True, null=True)
    linearid = models.CharField(max_length=22, blank=True, null=True)
    fullname = models.CharField(max_length=100, blank=True, null=True)
    lfromhn = models.CharField(max_length=12, blank=True, null=True)
    ltohn = models.CharField(max_length=12, blank=True, null=True)
    rfromhn = models.CharField(max_length=12, blank=True, null=True)
    rtohn = models.CharField(max_length=12, blank=True, null=True)
    zipl = models.CharField(max_length=5, blank=True, null=True)
    zipr = models.CharField(max_length=5, blank=True, null=True)
    edge_mtfcc = models.CharField(max_length=5, blank=True, null=True)
    parityl = models.CharField(max_length=1, blank=True, null=True)
    parityr = models.CharField(max_length=1, blank=True, null=True)
    plus4l = models.CharField(max_length=4, blank=True, null=True)
    plus4r = models.CharField(max_length=4, blank=True, null=True)
    lfromtyp = models.CharField(max_length=1, blank=True, null=True)
    ltotyp = models.CharField(max_length=1, blank=True, null=True)
    rfromtyp = models.CharField(max_length=1, blank=True, null=True)
    rtotyp = models.CharField(max_length=1, blank=True, null=True)
    offsetl = models.CharField(max_length=1, blank=True, null=True)
    offsetr = models.CharField(max_length=1, blank=True, null=True)
    the_geom = models.LineStringField(srid=4269, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'addrfeat'


class AirQualityCounties(models.Model):
    objectid = models.AutoField(primary_key=True)
    statefp = models.CharField(max_length=2, blank=True, null=True)
    countyfp = models.CharField(max_length=3, blank=True, null=True)
    countyns = models.CharField(max_length=8, blank=True, null=True)
    affgeoid = models.CharField(max_length=14, blank=True, null=True)
    geoid = models.CharField(max_length=5, blank=True, null=True)
    name = models.CharField(max_length=100, blank=True, null=True)
    lsad = models.CharField(max_length=2, blank=True, null=True)
    aland = models.FloatField(blank=True, null=True)
    awater = models.FloatField(blank=True, null=True)
    shape_length = models.FloatField(blank=True, null=True)
    shape_area = models.FloatField(blank=True, null=True)
    polygon_count = models.IntegerField(blank=True, null=True)
    mean_dslpm = models.FloatField(blank=True, null=True)
    mean_cancer = models.FloatField(blank=True, null=True)
    mean_resp = models.FloatField(blank=True, null=True)
    mean_ptraf = models.FloatField(blank=True, null=True)
    mean_ozone = models.FloatField(blank=True, null=True)
    mean_pm25 = models.FloatField(blank=True, null=True)
    mean_dslpm_min_max = models.FloatField(blank=True, null=True)
    mean_cancer_min_max = models.FloatField(blank=True, null=True)
    mean_resp_min_max = models.FloatField(blank=True, null=True)
    mean_ptraf_min_max = models.FloatField(blank=True, null=True)
    mean_ozone_min_max = models.FloatField(blank=True, null=True)
    mean_pm25_min_max = models.FloatField(blank=True, null=True)
    sum_aqi_mean = models.FloatField(blank=True, null=True)
    sum_aqi_min_max = models.FloatField(blank=True, null=True)
    # Field name made lowercase.
    shape = models.MultiPolygonField(db_column='Shape', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'air_quality_counties'


class Bg(models.Model):
    gid = models.AutoField(primary_key=True)
    statefp = models.CharField(max_length=2, blank=True, null=True)
    countyfp = models.CharField(max_length=3, blank=True, null=True)
    tractce = models.CharField(max_length=6, blank=True, null=True)
    blkgrpce = models.CharField(max_length=1, blank=True, null=True)
    bg_id = models.CharField(max_length=12)
    namelsad = models.CharField(max_length=13, blank=True, null=True)
    mtfcc = models.CharField(max_length=5, blank=True, null=True)
    funcstat = models.CharField(max_length=1, blank=True, null=True)
    aland = models.FloatField(blank=True, null=True)
    awater = models.FloatField(blank=True, null=True)
    intptlat = models.CharField(max_length=11, blank=True, null=True)
    intptlon = models.CharField(max_length=12, blank=True, null=True)
    the_geom = models.MultiPolygonField(srid=4269, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bg'
        db_table_comment = 'block groups'


class CoalClosureCensustracts(models.Model):
    objectid = models.AutoField(primary_key=True)
    affgeoid_t = models.CharField(max_length=254, blank=True, null=True)
    fipstate_2 = models.CharField(max_length=254, blank=True, null=True)
    # Field renamed because it ended with '_'.
    fipcounty_field = models.CharField(
        db_column='fipcounty_', max_length=254, blank=True, null=True)
    geoid_coun = models.CharField(max_length=254, blank=True, null=True)
    fiptract_2 = models.CharField(max_length=254, blank=True, null=True)
    geoid_trac = models.CharField(max_length=254, blank=True, null=True)
    mine_qual = models.CharField(max_length=254, blank=True, null=True)
    # Field renamed because it ended with '_'.
    generator_field = models.CharField(
        db_column='generator_', max_length=254, blank=True, null=True)
    neighbor_q = models.CharField(max_length=254, blank=True, null=True)
    state_name = models.CharField(max_length=254, blank=True, null=True)
    county_nam = models.CharField(max_length=254, blank=True, null=True)
    censustrac = models.CharField(max_length=254, blank=True, null=True)
    mine_closu = models.CharField(max_length=254, blank=True, null=True)
    generator1 = models.CharField(max_length=254, blank=True, null=True)
    adjacent_t = models.CharField(max_length=254, blank=True, null=True)
    tract_stat = models.CharField(max_length=254, blank=True, null=True)
    # Field renamed because it ended with '_'.
    date_last_field = models.DateTimeField(
        db_column='date_last_', blank=True, null=True)
    dataset_ve = models.FloatField(blank=True, null=True)
    record_add = models.DateTimeField(blank=True, null=True)
    symbol = models.CharField(max_length=254, blank=True, null=True)
    shape_leng = models.FloatField(blank=True, null=True)
    inpoly_fid = models.IntegerField(blank=True, null=True)
    maxsimptol = models.FloatField(blank=True, null=True)
    minsimptol = models.FloatField(blank=True, null=True)
    shape_length = models.FloatField(blank=True, null=True)
    shape_area = models.FloatField(blank=True, null=True)
    # Field name made lowercase.
    shape = models.MultiPolygonField(db_column='Shape', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'coal_closure_censustracts'


class County(models.Model):
    gid = models.AutoField(primary_key=True, unique=True)
    statefp = models.CharField(max_length=2, blank=True, null=True)
    countyfp = models.CharField(max_length=3, blank=True, null=True)
    countyns = models.CharField(max_length=8, blank=True, null=True)
    cntyidfp = models.CharField(max_length=5)
    name = models.CharField(max_length=100, blank=True, null=True)
    namelsad = models.CharField(max_length=100, blank=True, null=True)
    lsad = models.CharField(max_length=2, blank=True, null=True)
    classfp = models.CharField(max_length=2, blank=True, null=True)
    mtfcc = models.CharField(max_length=5, blank=True, null=True)
    csafp = models.CharField(max_length=3, blank=True, null=True)
    cbsafp = models.CharField(max_length=5, blank=True, null=True)
    metdivfp = models.CharField(max_length=5, blank=True, null=True)
    funcstat = models.CharField(max_length=1, blank=True, null=True)
    aland = models.BigIntegerField(blank=True, null=True)
    awater = models.FloatField(blank=True, null=True)
    intptlat = models.CharField(max_length=11, blank=True, null=True)
    intptlon = models.CharField(max_length=12, blank=True, null=True)
    the_geom = models.MultiPolygonField(srid=4269, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'county'


class CountyLookup(models.Model):
    # The composite primary key (st_code, co_code) found, that is not supported. The first column is selected.
    st_code = models.IntegerField(primary_key=True)
    state = models.CharField(max_length=2, blank=True, null=True)
    co_code = models.IntegerField()
    name = models.CharField(max_length=90, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'county_lookup'
        unique_together = (('st_code', 'co_code'),)


class CountyTable(models.Model):
    objectid_1 = models.AutoField(primary_key=True)
    objectid = models.IntegerField(blank=True, null=True)
    statefp = models.IntegerField(blank=True, null=True)
    countyfp = models.IntegerField(blank=True, null=True)
    countyns = models.IntegerField(blank=True, null=True)
    affgeoid = models.CharField(max_length=8000, blank=True, null=True)
    geoid = models.IntegerField(blank=True, null=True)
    lsad = models.IntegerField(blank=True, null=True)
    county_name = models.CharField(max_length=8000, blank=True, null=True)
    state_code = models.CharField(max_length=8000, blank=True, null=True)
    state_name = models.CharField(max_length=8000, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'county_table'


class CountysubLookup(models.Model):
    # The composite primary key (st_code, co_code, cs_code) found, that is not supported. The first column is selected.
    st_code = models.IntegerField(primary_key=True)
    state = models.CharField(max_length=2, blank=True, null=True)
    co_code = models.IntegerField()
    county = models.CharField(max_length=90, blank=True, null=True)
    cs_code = models.IntegerField()
    name = models.CharField(max_length=90, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'countysub_lookup'
        unique_together = (('st_code', 'co_code', 'cs_code'),)


class Cousub(models.Model):
    gid = models.AutoField(primary_key=True, unique=True)
    statefp = models.CharField(max_length=2, blank=True, null=True)
    countyfp = models.CharField(max_length=3, blank=True, null=True)
    cousubfp = models.CharField(max_length=5, blank=True, null=True)
    cousubns = models.CharField(max_length=8, blank=True, null=True)
    cosbidfp = models.CharField(max_length=10)
    name = models.CharField(max_length=100, blank=True, null=True)
    namelsad = models.CharField(max_length=100, blank=True, null=True)
    lsad = models.CharField(max_length=2, blank=True, null=True)
    classfp = models.CharField(max_length=2, blank=True, null=True)
    mtfcc = models.CharField(max_length=5, blank=True, null=True)
    cnectafp = models.CharField(max_length=3, blank=True, null=True)
    nectafp = models.CharField(max_length=5, blank=True, null=True)
    nctadvfp = models.CharField(max_length=5, blank=True, null=True)
    funcstat = models.CharField(max_length=1, blank=True, null=True)
    aland = models.DecimalField(
        max_digits=14, decimal_places=0, blank=True, null=True)
    awater = models.DecimalField(
        max_digits=14, decimal_places=0, blank=True, null=True)
    intptlat = models.CharField(max_length=11, blank=True, null=True)
    intptlon = models.CharField(max_length=12, blank=True, null=True)
    the_geom = models.MultiPolygonField(srid=4269, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cousub'


class DirectionLookup(models.Model):
    name = models.CharField(primary_key=True, max_length=20)
    abbrev = models.CharField(max_length=3, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'direction_lookup'


class DisadvantagedCommunitiesCensustracts(models.Model):
    objectid_1 = models.AutoField(primary_key=True)
    geoid10 = models.CharField(max_length=80, blank=True, null=True)
    county_name = models.CharField(max_length=255, blank=True, null=True)
    state_territory = models.CharField(max_length=255, blank=True, null=True)
    identified_as_disadvantaged_wit = models.SmallIntegerField(
        blank=True, null=True)
    identified_as_disadvantaged_bas = models.SmallIntegerField(
        blank=True, null=True)
    identified_as_disadvantaged = models.SmallIntegerField(
        blank=True, null=True)
    objectid = models.IntegerField(blank=True, null=True)
    shape_length = models.FloatField(blank=True, null=True)
    shape_area = models.FloatField(blank=True, null=True)
    inpoly_fid = models.IntegerField(blank=True, null=True)
    maxsimptol = models.FloatField(blank=True, null=True)
    minsimptol = models.FloatField(blank=True, null=True)
    # Field name made lowercase.
    shape = models.MultiPolygonField(db_column='Shape', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'disadvantaged_communities_censustracts'


class Edges(models.Model):
    gid = models.AutoField(primary_key=True)
    statefp = models.CharField(max_length=2, blank=True, null=True)
    countyfp = models.CharField(max_length=3, blank=True, null=True)
    tlid = models.BigIntegerField(blank=True, null=True)
    tfidl = models.DecimalField(
        max_digits=10, decimal_places=0, blank=True, null=True)
    tfidr = models.DecimalField(
        max_digits=10, decimal_places=0, blank=True, null=True)
    mtfcc = models.CharField(max_length=5, blank=True, null=True)
    fullname = models.CharField(max_length=100, blank=True, null=True)
    smid = models.CharField(max_length=22, blank=True, null=True)
    lfromadd = models.CharField(max_length=12, blank=True, null=True)
    ltoadd = models.CharField(max_length=12, blank=True, null=True)
    rfromadd = models.CharField(max_length=12, blank=True, null=True)
    rtoadd = models.CharField(max_length=12, blank=True, null=True)
    zipl = models.CharField(max_length=5, blank=True, null=True)
    zipr = models.CharField(max_length=5, blank=True, null=True)
    featcat = models.CharField(max_length=1, blank=True, null=True)
    hydroflg = models.CharField(max_length=1, blank=True, null=True)
    railflg = models.CharField(max_length=1, blank=True, null=True)
    roadflg = models.CharField(max_length=1, blank=True, null=True)
    olfflg = models.CharField(max_length=1, blank=True, null=True)
    passflg = models.CharField(max_length=1, blank=True, null=True)
    divroad = models.CharField(max_length=1, blank=True, null=True)
    exttyp = models.CharField(max_length=1, blank=True, null=True)
    ttyp = models.CharField(max_length=1, blank=True, null=True)
    deckedroad = models.CharField(max_length=1, blank=True, null=True)
    artpath = models.CharField(max_length=1, blank=True, null=True)
    persist = models.CharField(max_length=1, blank=True, null=True)
    gcseflg = models.CharField(max_length=1, blank=True, null=True)
    offsetl = models.CharField(max_length=1, blank=True, null=True)
    offsetr = models.CharField(max_length=1, blank=True, null=True)
    tnidf = models.DecimalField(
        max_digits=10, decimal_places=0, blank=True, null=True)
    tnidt = models.DecimalField(
        max_digits=10, decimal_places=0, blank=True, null=True)
    the_geom = models.MultiLineStringField(srid=4269, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'edges'


class ElecRetailPriceStates(models.Model):
    objectid = models.AutoField(primary_key=True)
    statefp = models.CharField(max_length=2, blank=True, null=True)
    statens = models.CharField(max_length=8, blank=True, null=True)
    affgeoid = models.CharField(max_length=11, blank=True, null=True)
    geoid = models.CharField(max_length=2, blank=True, null=True)
    stusps = models.CharField(max_length=2, blank=True, null=True)
    name = models.CharField(max_length=100, blank=True, null=True)
    lsad = models.CharField(max_length=2, blank=True, null=True)
    aland = models.FloatField(blank=True, null=True)
    awater = models.FloatField(blank=True, null=True)
    index = models.IntegerField(blank=True, null=True)
    state = models.CharField(max_length=8000, blank=True, null=True)
    # Field renamed because it contained more than one '_' in a row. Field renamed because it ended with '_'.
    average_retail_price_cents_kwh_field = models.FloatField(
        db_column='average_retail_price__cents_kwh_', blank=True, null=True)
    shape_length = models.FloatField(blank=True, null=True)
    shape_area = models.FloatField(blank=True, null=True)
    # Field name made lowercase.
    shape = models.MultiPolygonField(db_column='Shape', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'elec_retail_price_states'


class Faces(models.Model):
    gid = models.AutoField(primary_key=True)
    tfid = models.DecimalField(
        max_digits=10, decimal_places=0, blank=True, null=True)
    statefp00 = models.CharField(max_length=2, blank=True, null=True)
    countyfp00 = models.CharField(max_length=3, blank=True, null=True)
    tractce00 = models.CharField(max_length=6, blank=True, null=True)
    blkgrpce00 = models.CharField(max_length=1, blank=True, null=True)
    blockce00 = models.CharField(max_length=4, blank=True, null=True)
    cousubfp00 = models.CharField(max_length=5, blank=True, null=True)
    submcdfp00 = models.CharField(max_length=5, blank=True, null=True)
    conctyfp00 = models.CharField(max_length=5, blank=True, null=True)
    placefp00 = models.CharField(max_length=5, blank=True, null=True)
    aiannhfp00 = models.CharField(max_length=5, blank=True, null=True)
    aiannhce00 = models.CharField(max_length=4, blank=True, null=True)
    comptyp00 = models.CharField(max_length=1, blank=True, null=True)
    trsubfp00 = models.CharField(max_length=5, blank=True, null=True)
    trsubce00 = models.CharField(max_length=3, blank=True, null=True)
    anrcfp00 = models.CharField(max_length=5, blank=True, null=True)
    elsdlea00 = models.CharField(max_length=5, blank=True, null=True)
    scsdlea00 = models.CharField(max_length=5, blank=True, null=True)
    unsdlea00 = models.CharField(max_length=5, blank=True, null=True)
    uace00 = models.CharField(max_length=5, blank=True, null=True)
    cd108fp = models.CharField(max_length=2, blank=True, null=True)
    sldust00 = models.CharField(max_length=3, blank=True, null=True)
    sldlst00 = models.CharField(max_length=3, blank=True, null=True)
    vtdst00 = models.CharField(max_length=6, blank=True, null=True)
    zcta5ce00 = models.CharField(max_length=5, blank=True, null=True)
    tazce00 = models.CharField(max_length=6, blank=True, null=True)
    ugace00 = models.CharField(max_length=5, blank=True, null=True)
    puma5ce00 = models.CharField(max_length=5, blank=True, null=True)
    statefp = models.CharField(max_length=2, blank=True, null=True)
    countyfp = models.CharField(max_length=3, blank=True, null=True)
    tractce = models.CharField(max_length=6, blank=True, null=True)
    blkgrpce = models.CharField(max_length=1, blank=True, null=True)
    blockce = models.CharField(max_length=4, blank=True, null=True)
    cousubfp = models.CharField(max_length=5, blank=True, null=True)
    submcdfp = models.CharField(max_length=5, blank=True, null=True)
    conctyfp = models.CharField(max_length=5, blank=True, null=True)
    placefp = models.CharField(max_length=5, blank=True, null=True)
    aiannhfp = models.CharField(max_length=5, blank=True, null=True)
    aiannhce = models.CharField(max_length=4, blank=True, null=True)
    comptyp = models.CharField(max_length=1, blank=True, null=True)
    trsubfp = models.CharField(max_length=5, blank=True, null=True)
    trsubce = models.CharField(max_length=3, blank=True, null=True)
    anrcfp = models.CharField(max_length=5, blank=True, null=True)
    ttractce = models.CharField(max_length=6, blank=True, null=True)
    tblkgpce = models.CharField(max_length=1, blank=True, null=True)
    elsdlea = models.CharField(max_length=5, blank=True, null=True)
    scsdlea = models.CharField(max_length=5, blank=True, null=True)
    unsdlea = models.CharField(max_length=5, blank=True, null=True)
    uace = models.CharField(max_length=5, blank=True, null=True)
    cd111fp = models.CharField(max_length=2, blank=True, null=True)
    sldust = models.CharField(max_length=3, blank=True, null=True)
    sldlst = models.CharField(max_length=3, blank=True, null=True)
    vtdst = models.CharField(max_length=6, blank=True, null=True)
    zcta5ce = models.CharField(max_length=5, blank=True, null=True)
    tazce = models.CharField(max_length=6, blank=True, null=True)
    ugace = models.CharField(max_length=5, blank=True, null=True)
    puma5ce = models.CharField(max_length=5, blank=True, null=True)
    csafp = models.CharField(max_length=3, blank=True, null=True)
    cbsafp = models.CharField(max_length=5, blank=True, null=True)
    metdivfp = models.CharField(max_length=5, blank=True, null=True)
    cnectafp = models.CharField(max_length=3, blank=True, null=True)
    nectafp = models.CharField(max_length=5, blank=True, null=True)
    nctadvfp = models.CharField(max_length=5, blank=True, null=True)
    lwflag = models.CharField(max_length=1, blank=True, null=True)
    offset = models.CharField(max_length=1, blank=True, null=True)
    atotal = models.FloatField(blank=True, null=True)
    intptlat = models.CharField(max_length=11, blank=True, null=True)
    intptlon = models.CharField(max_length=12, blank=True, null=True)
    the_geom = models.MultiPolygonField(srid=4269, blank=True, null=True)
    tractce20 = models.CharField(max_length=6, blank=True, null=True)
    blkgrpce20 = models.CharField(max_length=1, blank=True, null=True)
    blockce20 = models.CharField(max_length=4, blank=True, null=True)
    countyfp20 = models.CharField(max_length=3, blank=True, null=True)
    statefp20 = models.CharField(max_length=2, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'faces'


class Featnames(models.Model):
    gid = models.AutoField(primary_key=True)
    tlid = models.BigIntegerField(blank=True, null=True)
    fullname = models.CharField(max_length=100, blank=True, null=True)
    name = models.CharField(max_length=100, blank=True, null=True)
    predirabrv = models.CharField(max_length=15, blank=True, null=True)
    pretypabrv = models.CharField(max_length=50, blank=True, null=True)
    prequalabr = models.CharField(max_length=15, blank=True, null=True)
    sufdirabrv = models.CharField(max_length=15, blank=True, null=True)
    suftypabrv = models.CharField(max_length=50, blank=True, null=True)
    sufqualabr = models.CharField(max_length=15, blank=True, null=True)
    predir = models.CharField(max_length=2, blank=True, null=True)
    pretyp = models.CharField(max_length=3, blank=True, null=True)
    prequal = models.CharField(max_length=2, blank=True, null=True)
    sufdir = models.CharField(max_length=2, blank=True, null=True)
    suftyp = models.CharField(max_length=3, blank=True, null=True)
    sufqual = models.CharField(max_length=2, blank=True, null=True)
    linearid = models.CharField(max_length=22, blank=True, null=True)
    mtfcc = models.CharField(max_length=5, blank=True, null=True)
    paflag = models.CharField(max_length=1, blank=True, null=True)
    statefp = models.CharField(max_length=2, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'featnames'


class FossilfuelPowerplants(models.Model):
    objectid_1 = models.AutoField(primary_key=True)
    objectid = models.IntegerField(blank=True, null=True)
    plant_code = models.CharField(max_length=6, blank=True, null=True)
    name = models.CharField(max_length=70, blank=True, null=True)
    address = models.CharField(max_length=34, blank=True, null=True)
    city = models.CharField(max_length=25, blank=True, null=True)
    state = models.CharField(max_length=2, blank=True, null=True)
    zip = models.CharField(max_length=13, blank=True, null=True)
    telephone = models.CharField(max_length=14, blank=True, null=True)
    type = models.CharField(max_length=157, blank=True, null=True)
    status = models.CharField(max_length=13, blank=True, null=True)
    county = models.CharField(max_length=21, blank=True, null=True)
    countyfips = models.CharField(max_length=13, blank=True, null=True)
    country = models.CharField(max_length=3, blank=True, null=True)
    latitude = models.FloatField(blank=True, null=True)
    longitude = models.FloatField(blank=True, null=True)
    naics_code = models.CharField(max_length=13, blank=True, null=True)
    naics_desc = models.CharField(max_length=37, blank=True, null=True)
    source = models.CharField(max_length=185, blank=True, null=True)
    sourcedate = models.DateTimeField(blank=True, null=True)
    val_method = models.CharField(max_length=13, blank=True, null=True)
    val_date = models.DateTimeField(blank=True, null=True)
    website = models.CharField(max_length=244, blank=True, null=True)
    operator = models.CharField(max_length=58, blank=True, null=True)
    operat_id = models.CharField(max_length=13, blank=True, null=True)
    oper_cap = models.FloatField(blank=True, null=True)
    summer_cap = models.FloatField(blank=True, null=True)
    winter_cap = models.FloatField(blank=True, null=True)
    plan_cap = models.FloatField(blank=True, null=True)
    retire_cap = models.FloatField(blank=True, null=True)
    gen_units = models.IntegerField(blank=True, null=True)
    plan_unit = models.IntegerField(blank=True, null=True)
    retir_unit = models.IntegerField(blank=True, null=True)
    prim_fuel = models.CharField(max_length=13, blank=True, null=True)
    sec_fuel = models.CharField(max_length=13, blank=True, null=True)
    coal_used = models.IntegerField(blank=True, null=True)
    ngas_used = models.IntegerField(blank=True, null=True)
    oil_used = models.IntegerField(blank=True, null=True)
    net_gen = models.FloatField(blank=True, null=True)
    cap_factor = models.FloatField(blank=True, null=True)
    sub_1 = models.CharField(max_length=42, blank=True, null=True)
    sub_2 = models.CharField(max_length=27, blank=True, null=True)
    lines = models.SmallIntegerField(blank=True, null=True)
    source_lat = models.FloatField(blank=True, null=True)
    sourc_long = models.FloatField(blank=True, null=True)
    # Field name made lowercase.
    shape = models.MultiPointField(db_column='Shape', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'fossilfuel_powerplants'


class GeocodeSettings(models.Model):
    name = models.TextField(primary_key=True)
    setting = models.TextField(blank=True, null=True)
    unit = models.TextField(blank=True, null=True)
    category = models.TextField(blank=True, null=True)
    short_desc = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'geocode_settings'


class GeocodeSettingsDefault(models.Model):
    name = models.TextField(primary_key=True)
    setting = models.TextField(blank=True, null=True)
    unit = models.TextField(blank=True, null=True)
    category = models.TextField(blank=True, null=True)
    short_desc = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'geocode_settings_default'


class Hospitals(models.Model):
    objectid = models.AutoField(primary_key=True)
    id = models.CharField(max_length=50, blank=True, null=True)
    name = models.CharField(max_length=155, blank=True, null=True)
    address = models.CharField(max_length=80, blank=True, null=True)
    city = models.CharField(max_length=50, blank=True, null=True)
    state = models.CharField(max_length=2, blank=True, null=True)
    zip = models.CharField(max_length=15, blank=True, null=True)
    zip4 = models.CharField(max_length=15, blank=True, null=True)
    telephone = models.CharField(max_length=30, blank=True, null=True)
    type = models.CharField(max_length=20, blank=True, null=True)
    status = models.CharField(max_length=10, blank=True, null=True)
    population = models.IntegerField(blank=True, null=True)
    county = models.CharField(max_length=30, blank=True, null=True)
    countyfips = models.CharField(max_length=50, blank=True, null=True)
    country = models.CharField(max_length=3, blank=True, null=True)
    latitude = models.FloatField(blank=True, null=True)
    longitude = models.FloatField(blank=True, null=True)
    naics_code = models.CharField(max_length=50, blank=True, null=True)
    naics_desc = models.CharField(max_length=255, blank=True, null=True)
    source = models.CharField(max_length=255, blank=True, null=True)
    sourcedate = models.DateTimeField(blank=True, null=True)
    val_method = models.CharField(max_length=30, blank=True, null=True)
    val_date = models.DateTimeField(blank=True, null=True)
    website = models.CharField(max_length=255, blank=True, null=True)
    state_id = models.CharField(max_length=50, blank=True, null=True)
    alt_name = models.CharField(max_length=255, blank=True, null=True)
    st_fips = models.CharField(max_length=50, blank=True, null=True)
    owner = models.CharField(max_length=50, blank=True, null=True)
    ttl_staff = models.IntegerField(blank=True, null=True)
    beds = models.FloatField(blank=True, null=True)
    trauma = models.CharField(max_length=50, blank=True, null=True)
    helipad = models.CharField(max_length=50, blank=True, null=True)
    # Field name made lowercase.
    shape = models.MultiPointField(db_column='Shape', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'hospitals'


class Layer(models.Model):
    # The composite primary key (topology_id, layer_id) found, that is not supported. The first column is selected.
    topology = models.OneToOneField(
        'Topology', models.DO_NOTHING, primary_key=True)
    layer_id = models.IntegerField()
    schema_name = models.CharField(max_length=50)
    table_name = models.CharField(max_length=50)
    feature_column = models.CharField(max_length=50)
    feature_type = models.IntegerField()
    level = models.IntegerField()
    child_id = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'layer'
        unique_together = (('topology', 'layer_id'),
                           ('schema_name', 'table_name', 'feature_column'),)


class LoaderLookuptables(models.Model):
    process_order = models.IntegerField()
    lookup_name = models.TextField(
        primary_key=True, db_comment='This is the table name to inherit from and suffix of resulting output table -- how the table will be named --  edges here would mean -- ma_edges , pa_edges etc. except in the case of national tables. national level tables have no prefix')
    table_name = models.TextField(
        blank=True, null=True, db_comment='suffix of the tables to load e.g.  edges would load all tables like *edges.dbf(shp)  -- so tl_2010_42129_edges.dbf .  ')
    single_mode = models.BooleanField()
    load = models.BooleanField(db_comment="Whether or not to load the table.  For states and zcta5 (you may just want to download states10, zcta510 nationwide file manually) load your own into a single table that inherits from tiger.states, tiger.zcta5.  You'll get improved performance for some geocoding cases.")
    level_county = models.BooleanField()
    level_state = models.BooleanField()
    level_nation = models.BooleanField(
        db_comment='These are tables that contain all data for the whole US so there is just a single file')
    post_load_process = models.TextField(blank=True, null=True)
    single_geom_mode = models.BooleanField(blank=True, null=True)
    insert_mode = models.CharField(max_length=1)
    pre_load_process = models.TextField(blank=True, null=True)
    # This field type is a guess.
    columns_exclude = models.TextField(
        blank=True, null=True, db_comment='List of columns to exclude as an array. This is excluded from both input table and output table and rest of columns remaining are assumed to be in same order in both tables. gid, geoid,cpi,suffix1ce are excluded if no columns are specified.')
    website_root_override = models.TextField(
        blank=True, null=True, db_comment='Path to use for wget instead of that specified in year table.  Needed currently for zcta where they release that only for 2000 and 2010')

    class Meta:
        managed = False
        db_table = 'loader_lookuptables'


class LoaderPlatform(models.Model):
    os = models.CharField(primary_key=True, max_length=50)
    declare_sect = models.TextField(blank=True, null=True)
    pgbin = models.TextField(blank=True, null=True)
    wget = models.TextField(blank=True, null=True)
    unzip_command = models.TextField(blank=True, null=True)
    psql = models.TextField(blank=True, null=True)
    path_sep = models.TextField(blank=True, null=True)
    loader = models.TextField(blank=True, null=True)
    environ_set_command = models.TextField(blank=True, null=True)
    county_process_command = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'loader_platform'


class LoaderVariables(models.Model):
    tiger_year = models.CharField(primary_key=True, max_length=4)
    website_root = models.TextField(blank=True, null=True)
    staging_fold = models.TextField(blank=True, null=True)
    data_schema = models.TextField(blank=True, null=True)
    staging_schema = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'loader_variables'


class ManufacturingFacilities(models.Model):
    objectid_1 = models.AutoField(primary_key=True)
    objectid = models.IntegerField(blank=True, null=True)
    unique_id = models.CharField(max_length=6, blank=True, null=True)
    name = models.CharField(max_length=80, blank=True, null=True)
    phone = models.CharField(max_length=14, blank=True, null=True)
    fax = models.CharField(max_length=14, blank=True, null=True)
    address = models.CharField(max_length=54, blank=True, null=True)
    address2 = models.CharField(max_length=72, blank=True, null=True)
    city = models.CharField(max_length=25, blank=True, null=True)
    state = models.CharField(max_length=2, blank=True, null=True)
    zip = models.CharField(max_length=5, blank=True, null=True)
    zip4 = models.CharField(max_length=4, blank=True, null=True)
    county = models.CharField(max_length=23, blank=True, null=True)
    fips = models.CharField(max_length=5, blank=True, null=True)
    maddress = models.CharField(max_length=50, blank=True, null=True)
    mcity = models.CharField(max_length=25, blank=True, null=True)
    mstate = models.CharField(max_length=2, blank=True, null=True)
    mzip = models.CharField(max_length=5, blank=True, null=True)
    mzip4 = models.CharField(max_length=4, blank=True, null=True)
    directions = models.CharField(max_length=253, blank=True, null=True)
    geoprec = models.CharField(max_length=9, blank=True, null=True)
    emp = models.IntegerField(blank=True, null=True)
    product = models.CharField(max_length=130, blank=True, null=True)
    sic = models.CharField(max_length=4, blank=True, null=True)
    sic2 = models.CharField(max_length=4, blank=True, null=True)
    sic3 = models.CharField(max_length=4, blank=True, null=True)
    sic4 = models.CharField(max_length=4, blank=True, null=True)
    naics = models.CharField(max_length=6, blank=True, null=True)
    naicsdescr = models.CharField(max_length=103, blank=True, null=True)
    web = models.CharField(max_length=40, blank=True, null=True)
    longitude = models.FloatField(blank=True, null=True)
    latitude = models.FloatField(blank=True, null=True)
    globalid = models.CharField(max_length=36, blank=True, null=True)
    # Field name made lowercase.
    shape = models.MultiPointField(db_column='Shape', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'manufacturing_facilities'


class MsaNonmsaCensustracts(models.Model):
    objectid_1 = models.AutoField(primary_key=True)
    objectid = models.IntegerField(blank=True, null=True)
    affgeoid_c = models.CharField(max_length=254, blank=True, null=True)
    fipstate_2 = models.CharField(max_length=254, blank=True, null=True)
    fipscty_20 = models.CharField(max_length=254, blank=True, null=True)
    # Field renamed because it ended with '_'.
    geoid_cty_field = models.CharField(
        db_column='geoid_cty_', max_length=254, blank=True, null=True)
    county_nam = models.CharField(max_length=254, blank=True, null=True)
    state_name = models.CharField(max_length=254, blank=True, null=True)
    msa_area_i = models.FloatField(blank=True, null=True)
    msa_area_n = models.CharField(max_length=254, blank=True, null=True)
    ffe_ind_qu = models.FloatField(blank=True, null=True)
    ec_ind_qua = models.FloatField(blank=True, null=True)
    msa_qual = models.CharField(max_length=254, blank=True, null=True)
    fee_qual_s = models.CharField(max_length=254, blank=True, null=True)
    ec_qual_st = models.CharField(max_length=254, blank=True, null=True)
    label_fee = models.CharField(max_length=254, blank=True, null=True)
    label_ec = models.CharField(max_length=254, blank=True, null=True)
    msa_nmsa_l = models.CharField(max_length=254, blank=True, null=True)
    # Field renamed because it ended with '_'.
    date_last_field = models.DateTimeField(
        db_column='date_last_', blank=True, null=True)
    dataset_ve = models.FloatField(blank=True, null=True)
    date_recor = models.DateTimeField(blank=True, null=True)
    shape_leng = models.FloatField(blank=True, null=True)
    shape_length = models.FloatField(blank=True, null=True)
    shape_area = models.FloatField(blank=True, null=True)
    inpoly_fid = models.IntegerField(blank=True, null=True)
    maxsimptol = models.FloatField(blank=True, null=True)
    minsimptol = models.FloatField(blank=True, null=True)
    # Field name made lowercase.
    shape = models.MultiPolygonField(db_column='Shape', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'msa_nonmsa_censustracts'


class NaturalHazardsCounties(models.Model):
    objectid = models.AutoField(primary_key=True)
    statefp = models.CharField(max_length=2, blank=True, null=True)
    countyfp = models.CharField(max_length=3, blank=True, null=True)
    countyns = models.CharField(max_length=8, blank=True, null=True)
    affgeoid = models.CharField(max_length=14, blank=True, null=True)
    geoid = models.CharField(max_length=5, blank=True, null=True)
    name = models.CharField(max_length=100, blank=True, null=True)
    lsad = models.CharField(max_length=2, blank=True, null=True)
    aland = models.FloatField(blank=True, null=True)
    awater = models.FloatField(blank=True, null=True)
    shape_length = models.FloatField(blank=True, null=True)
    shape_area = models.FloatField(blank=True, null=True)
    eq_risk = models.IntegerField(blank=True, null=True)
    fld_risk = models.IntegerField(blank=True, null=True)
    hurr_risk = models.IntegerField(blank=True, null=True)
    trnd_risk = models.IntegerField(blank=True, null=True)
    vlcn_risk = models.IntegerField(blank=True, null=True)
    wldfr_risk = models.IntegerField(blank=True, null=True)
    wntwthr_risk = models.IntegerField(blank=True, null=True)
    haz_total = models.IntegerField(blank=True, null=True)
    haz_total_std = models.FloatField(blank=True, null=True)
    # Field name made lowercase.
    shape = models.MultiPolygonField(db_column='Shape', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'natural_hazards_counties'


class NgCompStations(models.Model):
    objectid = models.AutoField(primary_key=True)
    gcompid = models.CharField(max_length=20, blank=True, null=True)
    name = models.CharField(max_length=150, blank=True, null=True)
    address = models.CharField(max_length=200, blank=True, null=True)
    city = models.CharField(max_length=50, blank=True, null=True)
    state = models.CharField(max_length=50, blank=True, null=True)
    zip = models.CharField(max_length=15, blank=True, null=True)
    zip4 = models.CharField(max_length=15, blank=True, null=True)
    type = models.CharField(max_length=85, blank=True, null=True)
    status = models.CharField(max_length=25, blank=True, null=True)
    county = models.CharField(max_length=50, blank=True, null=True)
    countyfips = models.CharField(max_length=20, blank=True, null=True)
    country = models.CharField(max_length=15, blank=True, null=True)
    latitude = models.FloatField(blank=True, null=True)
    longitude = models.FloatField(blank=True, null=True)
    naics_code = models.CharField(max_length=50, blank=True, null=True)
    naics_desc = models.CharField(max_length=85, blank=True, null=True)
    source = models.CharField(max_length=500, blank=True, null=True)
    sourcedate = models.DateTimeField(blank=True, null=True)
    val_method = models.CharField(max_length=85, blank=True, null=True)
    val_date = models.DateTimeField(blank=True, null=True)
    website = models.CharField(max_length=500, blank=True, null=True)
    pipeco = models.CharField(max_length=75, blank=True, null=True)
    compid = models.CharField(max_length=15, blank=True, null=True)
    operator = models.CharField(max_length=75, blank=True, null=True)
    posrel = models.CharField(max_length=50, blank=True, null=True)
    num_units = models.FloatField(blank=True, null=True)
    cert_hp = models.FloatField(blank=True, null=True)
    plant_cost = models.FloatField(blank=True, null=True)
    exp_fuel = models.FloatField(blank=True, null=True)
    exp_other = models.FloatField(blank=True, null=True)
    gas_compre = models.FloatField(blank=True, null=True)
    op_comp_hr = models.FloatField(blank=True, null=True)
    op_num_com = models.FloatField(blank=True, null=True)
    op_date_pe = models.DateTimeField(blank=True, null=True)
    exp_power = models.FloatField(blank=True, null=True)
    elec_compr = models.FloatField(blank=True, null=True)
    # Field name made lowercase.
    shape = models.MultiPointField(db_column='Shape', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'ng_comp_stations'


class NpInventoryMaster(models.Model):
    objectid = models.AutoField(primary_key=True)
    latitude = models.FloatField(blank=True, null=True)
    longitude = models.FloatField(blank=True, null=True)
    nid_id = models.CharField(max_length=8000, blank=True, null=True)
    dam_name = models.CharField(max_length=8000, blank=True, null=True)
    owner_name = models.CharField(max_length=8000, blank=True, null=True)
    owner_type = models.CharField(max_length=8000, blank=True, null=True)
    year_const = models.IntegerField(blank=True, null=True)
    fed_reg = models.CharField(max_length=8000, blank=True, null=True)
    ferc_reg = models.CharField(max_length=8000, blank=True, null=True)
    nerc_reg = models.CharField(max_length=8000, blank=True, null=True)
    nerc_subreg = models.CharField(max_length=8000, blank=True, null=True)
    state = models.CharField(max_length=8000, blank=True, null=True)
    county = models.CharField(max_length=8000, blank=True, null=True)
    river = models.CharField(max_length=8000, blank=True, null=True)
    huc_2 = models.IntegerField(blank=True, null=True)
    huc_12 = models.FloatField(blank=True, null=True)
    prmr_prps = models.CharField(max_length=8000, blank=True, null=True)
    dam_material = models.CharField(max_length=8000, blank=True, null=True)
    dam_height = models.FloatField(blank=True, null=True)
    hyd_height = models.IntegerField(blank=True, null=True)
    str_height = models.IntegerField(blank=True, null=True)
    max_height = models.IntegerField(blank=True, null=True)
    gate = models.CharField(max_length=8000, blank=True, null=True)
    spllwy_cntrl = models.CharField(max_length=8000, blank=True, null=True)
    dist_subst = models.FloatField(blank=True, null=True)
    dist_subst_std = models.FloatField(blank=True, null=True)
    cap_mw = models.FloatField(blank=True, null=True)
    cap_mw_std = models.FloatField(blank=True, null=True)
    cap_fctr = models.FloatField(blank=True, null=True)
    cap_fctr_std = models.FloatField(blank=True, null=True)
    huc12_pop = models.FloatField(blank=True, null=True)
    fsh_pssg_pct = models.FloatField(blank=True, null=True)
    fsh_pssg_pct_std = models.FloatField(blank=True, null=True)
    species_ct = models.IntegerField(blank=True, null=True)
    species_ct_std = models.FloatField(blank=True, null=True)
    mean_ann_q = models.FloatField(blank=True, null=True)
    max_dly_q = models.FloatField(blank=True, null=True)
    min_dly_q = models.FloatField(blank=True, null=True)
    schl_ct_50mi = models.IntegerField(blank=True, null=True)
    schl_ct_50mi_std = models.FloatField(blank=True, null=True)
    mfg_ct_50mi = models.IntegerField(blank=True, null=True)
    mfg_ct_50mi_std = models.FloatField(blank=True, null=True)
    hspt_ct_50mi = models.IntegerField(blank=True, null=True)
    hspt_ct_50mi_std = models.FloatField(blank=True, null=True)
    ng_ct_50mi = models.IntegerField(blank=True, null=True)
    ng_ct_50mi_std = models.FloatField(blank=True, null=True)
    fssl_ct_50mi = models.IntegerField(blank=True, null=True)
    fssl_ct_50mi_std = models.FloatField(blank=True, null=True)
    cap_50mi = models.FloatField(blank=True, null=True)
    cap_50mi_std = models.FloatField(blank=True, null=True)
    cap_fssl_ratio = models.FloatField(blank=True, null=True)
    cap_fssl_ratio_std = models.FloatField(blank=True, null=True)
    hurr_risk = models.IntegerField(blank=True, null=True)
    fld_risk = models.IntegerField(blank=True, null=True)
    trnd_risk = models.IntegerField(blank=True, null=True)
    vlcn_risk = models.IntegerField(blank=True, null=True)
    wldfr_risk = models.IntegerField(blank=True, null=True)
    wntwthr_risk = models.IntegerField(blank=True, null=True)
    eq_risk = models.IntegerField(blank=True, null=True)
    haz_total = models.IntegerField(blank=True, null=True)
    haz_total_std = models.FloatField(blank=True, null=True)
    hhaz_dam_ct = models.IntegerField(blank=True, null=True)
    fema_haz = models.CharField(max_length=8000, blank=True, null=True)
    dam_cond = models.CharField(max_length=8000, blank=True, null=True)
    eap_prep = models.CharField(max_length=8000, blank=True, null=True)
    comp_score = models.FloatField(blank=True, null=True)
    comp_score_std = models.FloatField(blank=True, null=True)
    dslpm = models.FloatField(blank=True, null=True)
    cancer = models.FloatField(blank=True, null=True)
    resp = models.FloatField(blank=True, null=True)
    ptraf = models.FloatField(blank=True, null=True)
    ozone = models.FloatField(blank=True, null=True)
    pm25 = models.FloatField(blank=True, null=True)
    sum_aqi = models.FloatField(blank=True, null=True)
    sum_aqi_std = models.FloatField(blank=True, null=True)
    elec_prc = models.FloatField(blank=True, null=True)
    elec_prc_std = models.FloatField(blank=True, null=True)
    max_hour_load = models.IntegerField(blank=True, null=True)
    max_hour_load_std = models.FloatField(blank=True, null=True)
    hyd_reg_ct = models.IntegerField(blank=True, null=True)
    hyd_reg_ct_std = models.FloatField(blank=True, null=True)
    hyd_fin_ct = models.IntegerField(blank=True, null=True)
    hyd_fin_ct_std = models.FloatField(blank=True, null=True)
    cap_consump = models.IntegerField(blank=True, null=True)
    cap_consump_std = models.FloatField(blank=True, null=True)
    cap_expense = models.IntegerField(blank=True, null=True)
    cap_expense_std = models.FloatField(blank=True, null=True)
    soc_vul = models.FloatField(blank=True, null=True)
    prot_land = models.CharField(max_length=8000, blank=True, null=True)
    imp_stream = models.CharField(max_length=8000, blank=True, null=True)
    crit_hab = models.CharField(max_length=8000, blank=True, null=True)
    grid_score = models.FloatField(blank=True, null=True)
    comm_score = models.FloatField(blank=True, null=True)
    industry_score = models.FloatField(blank=True, null=True)
    env_score = models.FloatField(blank=True, null=True)
    h2_feasibiliy = models.FloatField(blank=True, null=True)
    h2_feas_std = models.FloatField(blank=True, null=True)
    batr_feasibility = models.FloatField(blank=True, null=True)
    batr_feas_std = models.FloatField(blank=True, null=True)
    psh_dist = models.FloatField(blank=True, null=True)
    psh_feasibility = models.CharField(max_length=8000, blank=True, null=True)
    wholesale_market = models.CharField(max_length=8000, blank=True, null=True)
    ferc_docket = models.CharField(max_length=8000, blank=True, null=True)
    project_name = models.CharField(max_length=8000, blank=True, null=True)
    project_type = models.CharField(max_length=8000, blank=True, null=True)
    project_subcategory = models.CharField(
        max_length=8000, blank=True, null=True)
    project_developer = models.CharField(
        max_length=8000, blank=True, null=True)
    developer_type = models.CharField(max_length=8000, blank=True, null=True)
    license_status = models.CharField(max_length=8000, blank=True, null=True)
    wholesale_prc = models.FloatField(blank=True, null=True)
    wholesale_prc_std = models.FloatField(blank=True, null=True)
    # Field name made lowercase.
    shape = models.MultiPointField(db_column='Shape', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'np_inventory_master'


class PagcGaz(models.Model):
    seq = models.IntegerField(blank=True, null=True)
    word = models.TextField(blank=True, null=True)
    stdword = models.TextField(blank=True, null=True)
    token = models.IntegerField(blank=True, null=True)
    is_custom = models.BooleanField()

    class Meta:
        managed = False
        db_table = 'pagc_gaz'


class PagcLex(models.Model):
    seq = models.IntegerField(blank=True, null=True)
    word = models.TextField(blank=True, null=True)
    stdword = models.TextField(blank=True, null=True)
    token = models.IntegerField(blank=True, null=True)
    is_custom = models.BooleanField()

    class Meta:
        managed = False
        db_table = 'pagc_lex'


class PagcRules(models.Model):
    rule = models.TextField(blank=True, null=True)
    is_custom = models.BooleanField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'pagc_rules'


class Place(models.Model):
    gid = models.AutoField(primary_key=True, unique=True)
    statefp = models.CharField(max_length=2, blank=True, null=True)
    placefp = models.CharField(max_length=5, blank=True, null=True)
    placens = models.CharField(max_length=8, blank=True, null=True)
    plcidfp = models.CharField(max_length=7)
    name = models.CharField(max_length=100, blank=True, null=True)
    namelsad = models.CharField(max_length=100, blank=True, null=True)
    lsad = models.CharField(max_length=2, blank=True, null=True)
    classfp = models.CharField(max_length=2, blank=True, null=True)
    cpi = models.CharField(max_length=1, blank=True, null=True)
    pcicbsa = models.CharField(max_length=1, blank=True, null=True)
    pcinecta = models.CharField(max_length=1, blank=True, null=True)
    mtfcc = models.CharField(max_length=5, blank=True, null=True)
    funcstat = models.CharField(max_length=1, blank=True, null=True)
    aland = models.BigIntegerField(blank=True, null=True)
    awater = models.BigIntegerField(blank=True, null=True)
    intptlat = models.CharField(max_length=11, blank=True, null=True)
    intptlon = models.CharField(max_length=12, blank=True, null=True)
    the_geom = models.MultiPolygonField(srid=4269, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'place'


class PlaceLookup(models.Model):
    # The composite primary key (st_code, pl_code) found, that is not supported. The first column is selected.
    st_code = models.IntegerField(primary_key=True)
    state = models.CharField(max_length=2, blank=True, null=True)
    pl_code = models.IntegerField()
    name = models.CharField(max_length=90, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'place_lookup'
        unique_together = (('st_code', 'pl_code'),)


class PublicSchools(models.Model):
    objectid = models.AutoField(primary_key=True)
    ncesid = models.CharField(max_length=20, blank=True, null=True)
    name = models.CharField(max_length=150, blank=True, null=True)
    address = models.CharField(max_length=150, blank=True, null=True)
    city = models.CharField(max_length=50, blank=True, null=True)
    state = models.CharField(max_length=50, blank=True, null=True)
    zip = models.CharField(max_length=15, blank=True, null=True)
    zip4 = models.CharField(max_length=15, blank=True, null=True)
    telephone = models.CharField(max_length=50, blank=True, null=True)
    type = models.CharField(max_length=5, blank=True, null=True)
    status = models.CharField(max_length=5, blank=True, null=True)
    population = models.IntegerField(blank=True, null=True)
    county = models.CharField(max_length=50, blank=True, null=True)
    countyfips = models.CharField(max_length=20, blank=True, null=True)
    country = models.CharField(max_length=15, blank=True, null=True)
    latitude = models.FloatField(blank=True, null=True)
    longitude = models.FloatField(blank=True, null=True)
    naics_code = models.CharField(max_length=50, blank=True, null=True)
    naics_desc = models.CharField(max_length=50, blank=True, null=True)
    source = models.CharField(max_length=200, blank=True, null=True)
    sourcedate = models.DateTimeField(blank=True, null=True)
    val_method = models.CharField(max_length=50, blank=True, null=True)
    val_date = models.DateTimeField(blank=True, null=True)
    website = models.CharField(max_length=250, blank=True, null=True)
    # Field renamed because it ended with '_'.
    level_field = models.CharField(
        db_column='level_', max_length=15, blank=True, null=True)
    enrollment = models.IntegerField(blank=True, null=True)
    st_grade = models.CharField(max_length=5, blank=True, null=True)
    end_grade = models.CharField(max_length=5, blank=True, null=True)
    districtid = models.CharField(max_length=15, blank=True, null=True)
    ft_teacher = models.IntegerField(blank=True, null=True)
    shelter_id = models.CharField(max_length=50, blank=True, null=True)
    # Field name made lowercase.
    shape = models.MultiPointField(db_column='Shape', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'public_schools'


class SecondaryUnitLookup(models.Model):
    name = models.CharField(primary_key=True, max_length=20)
    abbrev = models.CharField(max_length=5, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'secondary_unit_lookup'


class SocialVulnerabilityCounties(models.Model):
    objectid = models.AutoField(primary_key=True)
    state = models.CharField(max_length=2, blank=True, null=True)
    county = models.CharField(max_length=255, blank=True, null=True)
    rpl_themes = models.FloatField(blank=True, null=True)
    shape_length = models.FloatField(blank=True, null=True)
    shape_area = models.FloatField(blank=True, null=True)
    svi_min_max = models.FloatField(blank=True, null=True)
    # Field name made lowercase.
    shape = models.MultiPolygonField(db_column='Shape', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'social_vulnerability_counties'


class State(models.Model):
    gid = models.AutoField(primary_key=True, unique=True)
    region = models.CharField(max_length=2, blank=True, null=True)
    division = models.CharField(max_length=2, blank=True, null=True)
    statefp = models.CharField(max_length=2)
    statens = models.CharField(max_length=8, blank=True, null=True)
    stusps = models.CharField(unique=True, max_length=2)
    name = models.CharField(max_length=100, blank=True, null=True)
    lsad = models.CharField(max_length=2, blank=True, null=True)
    mtfcc = models.CharField(max_length=5, blank=True, null=True)
    funcstat = models.CharField(max_length=1, blank=True, null=True)
    aland = models.BigIntegerField(blank=True, null=True)
    awater = models.BigIntegerField(blank=True, null=True)
    intptlat = models.CharField(max_length=11, blank=True, null=True)
    intptlon = models.CharField(max_length=12, blank=True, null=True)
    the_geom = models.MultiPolygonField(srid=4269, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'state'


class StateLookup(models.Model):
    st_code = models.IntegerField(primary_key=True)
    name = models.CharField(unique=True, max_length=40, blank=True, null=True)
    abbrev = models.CharField(unique=True, max_length=3, blank=True, null=True)
    statefp = models.CharField(
        unique=True, max_length=2, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'state_lookup'


class StreetTypeLookup(models.Model):
    name = models.CharField(primary_key=True, max_length=50)
    abbrev = models.CharField(max_length=50, blank=True, null=True)
    is_hw = models.BooleanField()

    class Meta:
        managed = False
        db_table = 'street_type_lookup'


class Tabblock(models.Model):
    gid = models.AutoField(primary_key=True)
    statefp = models.CharField(max_length=2, blank=True, null=True)
    countyfp = models.CharField(max_length=3, blank=True, null=True)
    tractce = models.CharField(max_length=6, blank=True, null=True)
    blockce = models.CharField(max_length=4, blank=True, null=True)
    tabblock_id = models.CharField(max_length=16)
    name = models.CharField(max_length=20, blank=True, null=True)
    mtfcc = models.CharField(max_length=5, blank=True, null=True)
    ur = models.CharField(max_length=1, blank=True, null=True)
    uace = models.CharField(max_length=5, blank=True, null=True)
    funcstat = models.CharField(max_length=1, blank=True, null=True)
    aland = models.FloatField(blank=True, null=True)
    awater = models.FloatField(blank=True, null=True)
    intptlat = models.CharField(max_length=11, blank=True, null=True)
    intptlon = models.CharField(max_length=12, blank=True, null=True)
    the_geom = models.MultiPolygonField(srid=4269, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tabblock'


class Tabblock20(models.Model):
    statefp = models.CharField(max_length=2, blank=True, null=True)
    countyfp = models.CharField(max_length=3, blank=True, null=True)
    tractce = models.CharField(max_length=6, blank=True, null=True)
    blockce = models.CharField(max_length=4, blank=True, null=True)
    geoid = models.CharField(primary_key=True, max_length=15)
    name = models.CharField(max_length=10, blank=True, null=True)
    mtfcc = models.CharField(max_length=5, blank=True, null=True)
    ur = models.CharField(max_length=1, blank=True, null=True)
    uace = models.CharField(max_length=5, blank=True, null=True)
    uatype = models.CharField(max_length=1, blank=True, null=True)
    funcstat = models.CharField(max_length=1, blank=True, null=True)
    aland = models.FloatField(blank=True, null=True)
    awater = models.FloatField(blank=True, null=True)
    intptlat = models.CharField(max_length=11, blank=True, null=True)
    intptlon = models.CharField(max_length=12, blank=True, null=True)
    the_geom = models.MultiPolygonField(srid=4269, blank=True, null=True)
    housing = models.FloatField(blank=True, null=True)
    pop = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tabblock20'


class Topology(models.Model):
    name = models.CharField(unique=True, max_length=50)
    srid = models.IntegerField()
    precision = models.FloatField()
    hasz = models.BooleanField()

    class Meta:
        managed = False
        db_table = 'topology'


class Tract(models.Model):
    gid = models.AutoField(primary_key=True)
    statefp = models.CharField(max_length=2, blank=True, null=True)
    countyfp = models.CharField(max_length=3, blank=True, null=True)
    tractce = models.CharField(max_length=6, blank=True, null=True)
    tract_id = models.CharField(max_length=11)
    name = models.CharField(max_length=7, blank=True, null=True)
    namelsad = models.CharField(max_length=20, blank=True, null=True)
    mtfcc = models.CharField(max_length=5, blank=True, null=True)
    funcstat = models.CharField(max_length=1, blank=True, null=True)
    aland = models.FloatField(blank=True, null=True)
    awater = models.FloatField(blank=True, null=True)
    intptlat = models.CharField(max_length=11, blank=True, null=True)
    intptlon = models.CharField(max_length=12, blank=True, null=True)
    the_geom = models.MultiPolygonField(srid=4269, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tract'


class Zcta5(models.Model):
    gid = models.AutoField(primary_key=True, unique=True)
    statefp = models.CharField(max_length=2)
    # The composite primary key (zcta5ce, statefp) found, that is not supported. The first column is selected.
    zcta5ce = models.CharField(max_length=5)
    classfp = models.CharField(max_length=2, blank=True, null=True)
    mtfcc = models.CharField(max_length=5, blank=True, null=True)
    funcstat = models.CharField(max_length=1, blank=True, null=True)
    aland = models.FloatField(blank=True, null=True)
    awater = models.FloatField(blank=True, null=True)
    intptlat = models.CharField(max_length=11, blank=True, null=True)
    intptlon = models.CharField(max_length=12, blank=True, null=True)
    partflg = models.CharField(max_length=1, blank=True, null=True)
    the_geom = models.MultiPolygonField(srid=4269, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'zcta5'
        unique_together = (('zcta5ce', 'statefp'),)


class ZipLookup(models.Model):
    zip = models.IntegerField(primary_key=True)
    st_code = models.IntegerField(blank=True, null=True)
    state = models.CharField(max_length=2, blank=True, null=True)
    co_code = models.IntegerField(blank=True, null=True)
    county = models.CharField(max_length=90, blank=True, null=True)
    cs_code = models.IntegerField(blank=True, null=True)
    cousub = models.CharField(max_length=90, blank=True, null=True)
    pl_code = models.IntegerField(blank=True, null=True)
    place = models.CharField(max_length=90, blank=True, null=True)
    cnt = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'zip_lookup'


class ZipLookupAll(models.Model):
    zip = models.IntegerField(blank=True, null=True)
    st_code = models.IntegerField(blank=True, null=True)
    state = models.CharField(max_length=2, blank=True, null=True)
    co_code = models.IntegerField(blank=True, null=True)
    county = models.CharField(max_length=90, blank=True, null=True)
    cs_code = models.IntegerField(blank=True, null=True)
    cousub = models.CharField(max_length=90, blank=True, null=True)
    pl_code = models.IntegerField(blank=True, null=True)
    place = models.CharField(max_length=90, blank=True, null=True)
    cnt = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'zip_lookup_all'


class ZipLookupBase(models.Model):
    zip = models.CharField(primary_key=True, max_length=5)
    state = models.CharField(max_length=40, blank=True, null=True)
    county = models.CharField(max_length=90, blank=True, null=True)
    city = models.CharField(max_length=90, blank=True, null=True)
    statefp = models.CharField(max_length=2, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'zip_lookup_base'


class ZipState(models.Model):
    # The composite primary key (zip, stusps) found, that is not supported. The first column is selected.
    zip = models.CharField(primary_key=True, max_length=5)
    stusps = models.CharField(max_length=2)
    statefp = models.CharField(max_length=2, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'zip_state'
        unique_together = (('zip', 'stusps'),)


class ZipStateLoc(models.Model):
    # The composite primary key (zip, stusps, place) found, that is not supported. The first column is selected.
    zip = models.CharField(primary_key=True, max_length=5)
    stusps = models.CharField(max_length=2)
    statefp = models.CharField(max_length=2, blank=True, null=True)
    place = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'zip_state_loc'
        unique_together = (('zip', 'stusps', 'place'),)
