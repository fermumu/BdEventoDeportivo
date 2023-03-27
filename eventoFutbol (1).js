deportista1 = {
    'nombre':'federico perez',
    'edad':32,
    'posicion':'delantero',
}

db.Deportistas.inset(deportista1);


db.Deportistas.insertMany([
    {
        'nombre':'felipe restrepo',
        'edad':21,
        'posicion':'volante creativo',
    },
    {
        'nombre':'arturo reyes',
        'edad':26,
        'posicion':'portero',
    },
    {
        'nombre':'pablo lima',
        'edad':26,
        'posicion':'defensa',
    },
])

db.Equipos.insertMany([
    {
        'nombre':'Tolima',
        'fecha de creacion':'1994',
        'jugadores inscritos':'32'
    },
    {
        'nombre':'Deportivo Cali',
        'fecha de creacion':'1985',
        'jugadores inscritos':'29'
    },
    {
        'nombre':'America',
        'fecha de creacion':'30',
        'jugadores inscritos':''
    },
    {
        'nombre':'Santa fe',
        'fecha de creacion':'1996',
        'jugadores inscritos':'27'
    }
])


db.Encuentros.insertMany([
    {
        'fecha':'2023-01-15',
        'equipos':'Santa fe vs America',
        'resultado':'1-2'
    },
    {
        'fecha':'2023-01-16',
        'equipos':'Tolima vs Deportivo Cali',
        'resultado':'2-0'
    },
    {
        'fecha':'2023-01-25',
        'equipos':'Deportivo Cali vs America',
        'resultado':'3-0'
    },
    {
        'fecha':'2023-01-26',
        'equipos':'Santa fe vs Tolima',
        'resultado':'1-3'
    },
])
