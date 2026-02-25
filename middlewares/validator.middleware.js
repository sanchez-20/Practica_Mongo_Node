export const validateSchema = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        return res
            .status(400)
            .json({
                error: error.issues ? error.issues.map((err) => err.message) : [error.message]
});
    }
};