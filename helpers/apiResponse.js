var apiResponse = {

    success: (res, data = {}, status_code = 200, message = "Request process successfully",) => {
        res.setHeader("Content-Type", "application/json");
        return res.status(data?.status_code ?? status_code).json({ status_code:status_code, message:message, ...data});
    },


    error: (res, data = null, status_code = 401, message = "Something went wrong!") => {
        res.setHeader("Content-Type", "application/json");
        return res.status(data?.status_code ?? status_code).json({ status_code:status_code, message:message, ...data});
    }

}


export default apiResponse;