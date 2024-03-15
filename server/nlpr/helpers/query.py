from itertools import chain


def to_dict(instance):
    """
    This helper function transforms the django model instance into a python dictionary whose keys are all public and private fields, and whose values are all entries or relationships.
    """
    opts = instance._meta
    data = {}
    for f in chain(opts.concrete_fields, opts.private_fields):
        data[f.name] = f.value_from_object(instance)
    for f in opts.many_to_many:
        data[f.name] = [i.id for i in f.value_from_object(instance)]
    return data
