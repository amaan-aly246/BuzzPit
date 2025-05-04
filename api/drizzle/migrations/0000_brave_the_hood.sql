CREATE TABLE "users_table" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"first_name" varchar(255) DEFAULT 'FirstName',
	"last_name" varchar(255) DEFAULT 'LastName',
	"user_name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"posts" uuid[] DEFAULT '{}',
	"likedPosts" uuid[] DEFAULT '{}',
	"dislikedPosts" uuid[] DEFAULT '{}',
	CONSTRAINT "users_table_user_name_unique" UNIQUE("user_name"),
	CONSTRAINT "users_table_email_unique" UNIQUE("email")
);
