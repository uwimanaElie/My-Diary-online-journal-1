import chai from 'chai';
import chaiHttp from 'chai-http'
import dotenv from 'dotenv'
import app from '../index'
import entryData from '../models/entryDatas'
const { expect } = chai;

chai.use(chaiHttp)

dotenv.config()

describe('POST api/v1')