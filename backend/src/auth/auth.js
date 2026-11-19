import express from 'passport';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import crypto from 'crypto';
import { Mongo } from '../database/mongo.js';
import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';

const collectionName = 'users';

passport.use(new LocalStrategy({ usernameField: 'email'}, async(email, password, callback) =>{
    const user =  await Mongo.db.cole
} ))