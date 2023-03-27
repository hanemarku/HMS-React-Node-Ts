import { body, ValidationChain } from "express-validator";

export const createValidator: ValidationChain[] = [
    body('name')
        .not()
        .isEmpty()
        .withMessage('Role name is required')
        .trim()
        .isString()
        .withMessage('Name needs to be in text format'),
    body('description')
        .not()
        .isEmpty()
        .withMessage('Description is required')
        .isString()
        .withMessage('Descripiton needs to be in text format'),
];

export const updateValidator: ValidationChain[] = [
    body('name')
        .not()
        .isEmpty()
        .withMessage('Role name is required')
        .trim()
        .isString()
        .withMessage('Name needs to be in text format'),
    body('description')
        .not()
        .isEmpty()
        .withMessage('Description is required')
        .isString()
        .withMessage('Descripiton needs to be in text format'),
];