const sendEmailController = (req, res) => {
    try {
        return res.status(200).send({
            success: true,
            message: "Your message sent successfully"
        })
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            success: false,
            message: "Send Email API error",
            error
        })
    }
}

module.exports = { sendEmailController };