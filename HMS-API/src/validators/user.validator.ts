import { body, ValidationChain } from "express-validator";

export const signUpValidator: ValidationChain[] = [
    body('firstname')
        .not()
        .isEmpty()
        .withMessage('Firstname is required')
        .trim()
        .isString()
        .withMessage('Name needs to be in text format'),
    body('lastname')
        .not()
        .isEmpty()
        .withMessage('Lastname is required')
        .trim()
        .isString()
        .withMessage('Lastname needs to be in text format'),
    body('email')
        .not()
        .isEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Email format is not correct'),
    body('password')
        .not()
        .isEmpty()
        .withMessage('Password is required')
        .isStrongPassword()
        .withMessage('Strong password is required'),
];


export const signinValidator: ValidationChain[] = [
    body('email')
        .not()
        .isEmpty()
        .withMessage('Email is required'),
    body('password')
        .not()
        .isEmpty()
        .withMessage('Password is required'),
];