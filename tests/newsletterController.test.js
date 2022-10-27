const db = require('./memoryDB')
const newsletterCtl = require('../controllers/newsletterController')

beforeAll(async () => await db.connect())
afterEach(async () => await db.dropCollections())
afterAll(async () => await db.close())

describe('Newsletter Controller', () => {
    it('should', async () => {
        expect('hi').toBeTruthy()
    })
})