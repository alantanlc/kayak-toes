export const affiliate = [
    { displayName: 'NTU', fullName: 'Nanyang Technological University', photo: 'https://instagram.fsin8-1.fna.fbcdn.net/vp/a61e90a8176fbdfdd7a79c97072ded03/5DB6CC94/t51.2885-19/s150x150/12783489_1714239398811463_304472835_a.jpg?_nc_ht=instagram.fsin8-1.fna.fbcdn.net' },
    { displayName: 'NUS', fullName: 'National University of Singapore', photo: 'https://instagram.fsin8-1.fna.fbcdn.net/vp/a3e7b287b985abcf446aecc2ea7b1983/5DB0D5AA/t51.2885-19/s150x150/29418067_238654903348475_9202539096122064896_n.jpg?_nc_ht=instagram.fsin8-1.fna.fbcdn.net' },
    { displayName: 'SIM', fullName: 'Singapore Institute of Management', photo: 'https://instagram.fsin8-1.fna.fbcdn.net/vp/0e656edbfc63894bea11c046d51b0379/5DEC33EF/t51.2885-19/s150x150/19623076_207583296433232_5789169444567646208_a.jpg?_nc_ht=instagram.fsin8-1.fna.fbcdn.net' }
];

export const athletes = [
    {
        displayName: 'alan',
        firstName: 'Alan',
        lastName: 'Tan',
        affiliate: affiliate[1],
        photo: 'https://instagram.fsin8-1.fna.fbcdn.net/vp/f330f6ed6d22967be7680719f820bfee/5DA96223/t51.2885-19/10919640_1660085217570227_658502833_a.jpg?_nc_ht=instagram.fsin8-1.fna.fbcdn.net',
    },
    {
        displayName: 'tessa',
        firstName: 'Tessa',
        lastName: 'Tan',
        affiliate: affiliate[0],
        photo: 'https://instagram.fsin8-1.fna.fbcdn.net/vp/d8ebc9448cc7b9d720e01b2a6602e3aa/5DC9B169/t51.2885-19/s150x150/15802701_281972905551188_4287046044866314240_a.jpg?_nc_ht=instagram.fsin8-1.fna.fbcdn.net',
    },
    {
        displayName: 'loy',
        firstName: 'Bryan',
        lastName: 'Loy',
        affiliate: affiliate[0],
        photo: 'https://instagram.fsin8-1.fna.fbcdn.net/vp/6ab13aff08857b9cd27933f178563966/5DB316FE/t51.2885-19/s150x150/23421301_1459229850821830_354755863333830656_n.jpg?_nc_ht=instagram.fsin8-1.fna.fbcdn.net',
    },
    {
        displayName: 'ch',
        firstName: 'Chi Hin',
        lastName: 'Chan',
        affiliate: affiliate[0],
        photo: 'https://instagram.fsin8-1.fna.fbcdn.net/vp/d1a0097fe49f4f20a28d4a20dc5dbbb7/5DECBA2B/t51.2885-19/s150x150/18513990_1840644779530604_5391084684136415232_a.jpg?_nc_ht=instagram.fsin8-1.fna.fbcdn.net',
    },
    {
        displayName: 'wc',
        firstName: 'Wang Cong',
        lastName: 'Heng',
        affiliate: affiliate[0],
        photo: 'https://instagram.fsin8-1.fna.fbcdn.net/vp/f441c8241df23da86bfcab096479cace/5DAED0A1/t51.2885-19/s150x150/58410232_816038482109802_2832616165337989120_n.jpg?_nc_ht=instagram.fsin8-1.fna.fbcdn.net',
    },
    {
        displayName: 'benho',
        firstName: 'Benjamin',
        lastName: 'Ho',
        affiliate: affiliate[0],
        photo: 'https://instagram.fsin8-1.fna.fbcdn.net/vp/25bf2e97e638da132b82eee660d6042c/5DB69A31/t51.2885-19/s150x150/39269295_240415863339908_2487338109415456768_n.jpg?_nc_ht=instagram.fsin8-1.fna.fbcdn.net',
    }
];

export const boats = [
    {
        displayName: 'ak09',
        color: 'red',
        ca: 4001
    },
    {
        displayName: 'white kape',
        color: 'white',
        ca: 4002
    },
    {
        displayName: 'sete',
        color: 'red',
        ca: 4003
    },
    {
        displayName: 't1',
        color: 'red',
        ca: 4004
    },
    {
        displayName: 'rapt07',
        color: 'red',
        ca: 4005
    },
    {
        displayName: 'blue rapt',
        color: 'blue',
        ca: 4006
    },
    {
        displayName: 'ak10',
        color: 'red',
        ca: 4007
    },
    {
        displayName: 'tiger',
        color: 'red',
        ca: 4008
    },
    {
        displayName: 'quattro',
        color: 'red',
        ca: 4009
    },
    {
        displayName: 'v2',
        color: 'white',
        ca: 4010
    },
    {
        displayName: 'quattro ml',
        color: 'white',
        ca: 4011
    }
]

export const attendees = [
    {
        athlete: athletes[0],
        boat: boats[0]
    },
    {
        athlete: athletes[1],
        boat: boats[9]
    },
    {
        athlete: athletes[2],
        boat: boats[2]
    },
    {
        athlete: athletes[3],
        boat: boats[3]
    },
    {
        athlete: athletes[4],
        boat: boats[8]
    },
    {
        athlete: athletes[5],
        boat: boats[10]
    },
];

export const trainings = [
    {
        programme: "2km warmup\n2.5km tech ex with 1 ball\n2.5km tech ex with 2 balls\n3km tech paddling no balls\n2km cool down",
        venue: 'MacRitchie Reservoir',
        startTime: new Date('7/15/2019'),
        endTime: new Date,
        attendees: attendees
    },
    {
        programme: "2km warm up\n2 x (5x5/1') + 2' rest\n1st big set:\n2nd ex-L3-3-4-5\n2nd big set:\nL5-3-3-3-5\n2km cool down",
        venue: 'MacRitchie Reservoir',
        startTime: new Date('7/16/2019'),
        endTime: new Date,
        attendees: attendees
    },
    {
        programme: "2km warm up\n6km light aerobic\n6km heavy aerobic\nCan wash ride (can only stop to drink or wait for each other after each aerobic stage is completed)\n2km cool down",
        venue: 'MacRitchie Reservoir',
        startTime: new Date('7/17/2019'),
        endTime: new Date,
        attendees: attendees
    },
    {
        programme: "2km warm up\n3 x 2km / 20'\n1st set time trial\n2nd set 80%\n3rd set 200m off 200m on\n2km cool down",
        venue: 'MacRitchie Reservoir',
        startTime: new Date('7/18/2019'),
        endTime: new Date,
        attendees: attendees
    },
    {
        programme: "10km tech paddling",
        venue: 'MacRitchie Reservoir',
        startTime: new Date('7/19/2019'),
        endTime: new Date,
        attendees: attendees
    },
    {
        programme: "4km warm up\n2km time trial / 20'\n200m time trial\n2km cool down",
        venue: 'MacRitchie Reservoir',
        startTime: new Date('7/20/2019'),
        endTime: new Date,
        attendees: attendees
    },
    {
        programme: "",
        venue: 'MacRitchie Reservoir',
        startTime: new Date('7/21/2019'),
        endTime: '',
        attendees: []
    },
];

export const leaderboard = [
    {
        athlete: athletes[0],
        category: '200m',
        result: '41.1',
        training: trainings[3],
        dateTime: new Date('7/1/2019'),
        venue: 'MacRitchie Reservoir',
        boat: boats[0],
    },
    {
        athlete: athletes[1],
        category: '200m',
        result: '38.2',
        training: trainings[3],
        dateTime: new Date,
        venue: 'MacRitchie Reservoir',
        boat: boats[1],
    },
    {
        athlete: athletes[2],
        category: '200m',
        result: '30.3',
        training: trainings[3],
        dateTime: new Date('7/1/2019'),
        venue: 'MacRitchie Reservoir',
        boat: boats[2],
    },
    {
        athlete: athletes[3],
        category: '200m',
        result: '39.4',
        training: trainings[3],
        dateTime: new Date,
        venue: 'MacRitchie Reservoir',
        boat: boats[3],
    },
    {
        athlete: athletes[4],
        category: '200m',
        result: '37.5',
        training: trainings[3],
        dateTime: new Date,
        venue: 'MacRitchie Reservoir',
        boat: boats[4],
    },
    {
        athlete: athletes[5],
        category: '200m',
        result: '40.6',
        training: trainings[3],
        dateTime: new Date,
        venue: 'MacRitchie Reservoir',
        boat: boats[5],
    },
    
    {
        athlete: athletes[0],
        category: '500m',
        result: '120',
        training: trainings[3],
        dateTime: new Date,
        venue: 'MacRitchie Reservoir',
        boat: boats[6],
    },
    {
        athlete: athletes[1],
        category: '500m',
        result: '132',
        training: trainings[3],
        dateTime: new Date,
        venue: 'MacRitchie Reservoir',
        boat: boats[7],
    },
    {
        athlete: athletes[2],
        category: '500m',
        result: '123',
        training: trainings[3],
        dateTime: new Date,
        venue: 'MacRitchie Reservoir',
        boat: boats[8],
    },
    {
        athlete: athletes[3],
        category: '500m',
        result: '130',
        training: trainings[3],
        dateTime: new Date,
        venue: 'MacRitchie Reservoir',
        boat: boats[9],
    },
    {
        athlete: athletes[4],
        category: '500m',
        result: '119',
        training: trainings[3],
        dateTime: new Date,
        venue: 'MacRitchie Reservoir',
        boat: boats[10],
    },
    {
        athlete: athletes[5],
        category: '500m',
        result: '124',
        training: trainings[3],
        dateTime: new Date,
        venue: 'MacRitchie Reservoir',
        boat: boats[1],
    },

    {
        athlete: athletes[0],
        category: '1000m',
        result: '240',
        training: trainings[3],
        dateTime: new Date,
        venue: 'MacRitchie Reservoir',
        boat: boats[1],
    },
    {
        athlete: athletes[1],
        category: '1000m',
        result: '250',
        training: trainings[3],
        dateTime: new Date,
        venue: 'MacRitchie Reservoir',
        boat: boats[2],
    },
    {
        athlete: athletes[2],
        category: '1000m',
        result: '260',
        training: trainings[3],
        dateTime: new Date,
        venue: 'MacRitchie Reservoir',
        boat: boats[3],
    },

    {
        athlete: athletes[0],
        category: '2km',
        result: '41.1',
        training: trainings[3],
        dateTime: new Date('7/1/2019'),
        venue: 'MacRitchie Reservoir',
        boat: boats[0],
    },
    {
        athlete: athletes[1],
        category: '2km',
        result: '38.2',
        training: trainings[3],
        dateTime: new Date,
        venue: 'MacRitchie Reservoir',
        boat: boats[1],
    },
    {
        athlete: athletes[2],
        category: '2km',
        result: '30.3',
        training: trainings[3],
        dateTime: new Date('7/1/2019'),
        venue: 'MacRitchie Reservoir',
        boat: boats[2],
    },
    {
        athlete: athletes[3],
        category: '2km',
        result: '39.4',
        training: trainings[3],
        dateTime: new Date,
        venue: 'MacRitchie Reservoir',
        boat: boats[3],
    },
    {
        athlete: athletes[4],
        category: '2km',
        result: '37.5',
        training: trainings[3],
        dateTime: new Date,
        venue: 'MacRitchie Reservoir',
        boat: boats[4],
    },
    {
        athlete: athletes[5],
        category: '2km',
        result: '40.6',
        training: trainings[3],
        dateTime: new Date,
        venue: 'MacRitchie Reservoir',
        boat: boats[5],
    },
    
    {
        athlete: athletes[0],
        category: '2km',
        result: '120',
        training: trainings[3],
        dateTime: new Date,
        venue: 'MacRitchie Reservoir',
        boat: boats[6],
    },
    {
        athlete: athletes[1],
        category: '2km',
        result: '132',
        training: trainings[3],
        dateTime: new Date,
        venue: 'MacRitchie Reservoir',
        boat: boats[7],
    },
    {
        athlete: athletes[2],
        category: '2km',
        result: '123',
        training: trainings[3],
        dateTime: new Date,
        venue: 'MacRitchie Reservoir',
        boat: boats[8],
    },
    
];

export const reference = [
    { category: 'category', key: '200m', value: '200m' },
    { category: 'category', key: '500m', value: '500m' },
    { category: 'category', key: '1000m', value: '1000m' },
    { category: 'category', key: '2km', value: '2km' },
    { category: 'category', key: '5km', value: '5km' },
    { category: 'category', key: '10km', value: '10km' },
];