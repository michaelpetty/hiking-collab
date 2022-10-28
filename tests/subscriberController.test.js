const db = require('./memoryDB')
const subscriberCtl = require('../controllers/subscriberController')

beforeAll(async () => await db.connect())
afterEach(async () => await db.dropCollections())
afterAll(async () => await db.close())

const mockRequest = (body, params) => {
    return {body, params}
}

const mockResponse = () => {
    const res = {}
    res.status = jest.fn().mockReturnValue(res)
    res.json = (json) => json
    return res
}

describe('Newsletter Controller', () => {
    const seedSubcribers = [
        {   
            firstName: "John",
            lastName: "Doe",
            email: "john@example.com",
            DayHikes: true,
            OvernightHikes: true,
            DestinationHikes: false,
        },
        {   
            firstName: "Mary",
            lastName: "Moe",
            email: "mary@mail.com",
            DayHikes: false,
            OvernightHikes: true,
            DestinationHikes: false,
        
        },
        {   
            firstName: "July",
            lastName: "Dooley",
            email: "july@greatstuff.com",
            DayHikes: true,
            OvernightHikes: true,
            DestinationHikes: true,
        },
        {   
            firstName: "Anja",
            lastName: "Ravendale",
            email: "a_r@test.com",
            DayHikes: false,
            OvernightHikes: true,
            DestinationHikes: true,
        },
        {   
            firstName: "Leanne",
            lastName: "Graham",
            email: "Sincere@april.biz",
            DayHikes: true,
            OvernightHikes: false,
            DestinationHikes: true,
        
        },
        {  
            firstName:"Ervin",
            lastName: "Howell",
            email:"Shanna@melissa.tv",
            DayHikes: false,
            OvernightHikes: false,
            DestinationHikes: true,
        },
        {  
            firstName:"Clementine",
            lastName: "Bauch",
            email:"Nathan@yesenia.net",
            DayHikes: false,
            OvernightHikes: false,
            DestinationHikes: true,
        },
        {   
            firstName:"Patricia",
            lastName: "Lebsack",
            email:"Julianne.OConner@kory.org",
            DayHikes: true,
            OvernightHikes: true,
            DestinationHikes: true,
        }
    ]
    it('should add a new play to the db', async () => {
        let newSubscriber = await subscriberCtl.createOne(mockRequest(seedSubcribers[0]), mockResponse())
        expect(newSubscriber.firstName).toStrictEqual('John')
        expect(newSubscriber.DayHikes).toStrictEqual(true)
        expect(newSubscriber.DestinationHikes).toStrictEqual(false)
    })
    it('should add many new plays to the db', async () => {
        let newSubscribers = await subscriberCtl.createMany(mockRequest(seedSubcribers), mockResponse())
        expect(newSubscribers).toHaveLength(seedSubcribers.length)
    })
    it('should find all subscribers', async () => {
        await subscriberCtl.createMany(mockRequest(seedSubcribers), mockResponse())
        let foundSubscribers = await subscriberCtl.findAll(mockRequest(), mockResponse())
        expect(foundSubscribers).toHaveLength(seedSubcribers.length)
    })
    it('should find one sunscriber by id', async () => {
        let newSubscribers = await subscriberCtl.createMany(mockRequest(seedSubcribers), mockResponse())
        let subscriber = newSubscribers.filter(sub => sub.firstName === 'Clementine')[0]
        let foundSubscriber = await subscriberCtl.findOne(mockRequest('', {id: subscriber._id}), mockResponse())
        expect(foundSubscriber).toBeInstanceOf(Object)
        expect(foundSubscriber).toHaveProperty('lastName', 'Bauch')
        expect(foundSubscriber.DayHikes).toStrictEqual(false)
    })
})