import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import userData from '../models/userDatas'


const { expect } = chai;


chai.use(chaiHttp);


describe('POST api/v1/auth/signup firstName is missing', () => {
    it('should return firstName is required', (wellDone) => {
        chai.request(app)
            .post('/api/v1/auth/signup')
            .set('Accept', 'application/json')
            .send(userData[0])
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                expect(res.status).to.equal(400);
                expect(res.body.status).to.equal(400);
                expect(res.body.error).to.equal('"firstName" is required');
                wellDone();
            });
    });
});

describe('POST api/v1/auth/signup some fileds in payload are empty', () => {
    it('should return request has empty fields', (wellDone) => {
        chai.request(app)
            .post('/api/v1/auth/signup')
            .set('Accept', 'application/json')
            .send(userData[1])
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                expect(res.status).to.equal(400);
                expect(res.body.status).to.equal(400);
                wellDone();
            });
    });
});

describe('POST api/v1/auth/signup some fileds can not be numbers', () => {
    it('should return request has some unallowed data', (wellDone) => {
        chai.request(app)
            .post('/api/v1/auth/signup')
            .set('Accept', 'application/json')
            .send(userData[2])
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                expect(res.status).to.equal(400);
                expect(res.body.status).to.equal(400);
                wellDone();
            });
    });
});

describe('POST api/v1/auth/signup email must be unique', () => {
    it('should return email exists there', (wellDone) => {
        chai.request(app)
            .post('/api/v1/auth/signup')
            .set('Accept', 'application/json')
            .send(userData[4])
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                expect(res.status).to.equal(201);
                expect(res.body.status).to.equal(201);
                wellDone();
            });
    });
});

describe('POST api/v1/auth/signup creating employee account', () => {
    it('should return account is created successfully', (wellDone) => {
        chai.request(app)
            .post('/api/v1/auth/signup')
            .set('Accept', 'application/json')
            .send(userData[5])
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                expect(res.status).to.equal(201);
                expect(res.body.status).to.equal(201);
                wellDone();
            });
    });
});

describe('POST api/v1/auth/signin email is missing', () => {
    it('should return email is required', (wellDone) => {
        chai.request(app)
            .post('/api/v1/auth/signin')
            .set('Accept', 'application/json')
            .send(userData[6])
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                expect(res.status).to.equal(401);
                expect(res.body.status).to.equal(401);
                wellDone();
            });
    });
});

describe('POST api/v1/auth/signin user signin success', () => {
    it('should return user is signed successfully', (wellDone) => {
        chai.request(app)
            .post('/api/v1/auth/signin')
            .set('Accept', 'application/json')
            .send(userData[7])
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                expect(res.status).to.equal(401);
                expect(res.body.status).to.equal(401);
                wellDone();
            });
    });
});

describe('POST api/v1/auth/signin employee signin failure', () => {
    it('should return user is not logged in', (wellDone) => {
        chai.request(app)
            .post('/api/v1/auth/signin')
            .set('Accept', 'application/json')
            .send(userData[8])
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                expect(res.status).to.equal(401);
                expect(res.body.status).to.equal(401);
                wellDone();
            });
    });
});
