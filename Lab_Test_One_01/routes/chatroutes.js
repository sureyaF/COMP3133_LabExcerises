const express = require(`express`)
const router = express.Router();
const Chat = require(`../model/Chat`)


router.post(`/username=?&room=?`,
    async (req, res) => {
        const chat = new Chat({
            "from": req.body.username,//`${user.username}`,
            "room": req.body.room,//`${user.room}`,
            "message": req.body,//`${msg}`,
            "date": req.body//`${msg.time}`
        })
        try {
            const saveChat = await chat.save()
            res.json(saveChat)
        } catch (err) {
            res.json({ message: err })
        }
    }

)



module.exports = router;