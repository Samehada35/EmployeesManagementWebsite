db.createUser(
        {
            user: "root",
            pwd: "root",
            roles: [
                {
                    role: "readWrite",
                    db: "employe_db"
                },
                {
                    role: "readWrite",
                    db: "mails_db"
                }
            ]
        }
);
