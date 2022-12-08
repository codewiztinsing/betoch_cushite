 const user = await User.findOne(
            {
                email: req.body.email
            }
        );

        
            const userPassword = CryptoJs.AES.decrypt(user.password, process.env.JWT_SECRET).toString(CryptoJs.enc.Utf8)
            const inputPassword = req.body.password

            userPassword != inputPassword && res.status(401).json({
                message: "incorrect password"
            });

            const token = jwt.sign({
                id: user._id,
                isAdmin: user.isAdmin
            }, process.env.JWT_SECRET,
                { expiresIn: '3d' })

            const { password, ...others } = user;
        
            res.status(200).json({ others, token })