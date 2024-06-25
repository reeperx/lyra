import { defineConfig } from "drizzle-kit"

export default defineConfig ({
    schema:  "./utils/schema.tsx",
    dialect: "postgresql",
    dbCredentials: {
        url: "postgresql://interview_owner:UKO58HnagWBw@ep-frosty-sunset-a5tbceww.us-east-2.aws.neon.tech/lyra?sslmode=require",
    },
    verbose: true,
    strict: true,
})