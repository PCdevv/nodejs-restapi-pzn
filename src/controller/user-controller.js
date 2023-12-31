import userService from "../service/user-service";

const register = async (req, res, next) => {
    try {
        const result = userService.register(req.body);
        res.status(200).json({
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

export default { register };
