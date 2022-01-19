const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getAllThoughts);

// GET, PUT, and DELETE a single thought by its _id
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

// POST to create a new thought
router.route('/:userId').post(createThought);

// POST to create a reaction stored in a single thought's reactions array field
router.route('/:thoughtId/reactions').post(createReaction);

// DELETE to pull and remove a reaction by the reaction's reactionId value
router.route('/:thoughtId/reactions').delete(deleteReaction);