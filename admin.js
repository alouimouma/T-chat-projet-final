const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
const AdminBroMongoose = require("admin-bro-mongoose");

const User = require("./models/userModel");
const Post = require("./models/postModel");
const Message = require("./models/messageModel");
const Notify = require("./models/notifyModel");
const Comment = require("./models/commentModel");
const Conversation = require("./models/conversationModel");

const contentNavigation = {
    name: "T-chat",
    icon: "Success",
};
AdminBro.registerAdapter(AdminBroMongoose);
const adminBro = new AdminBro({
    rootPath: "/admin",
    //   resources: [
    //     {
    //       resource: User, Profile,
    //       options: {
    //         // We'll add this later
    //       },

    //     }
    //   ],
    resources: [
        { resource: User, options: { navigation: contentNavigation } },
        { resource: Post, options: { navigation: contentNavigation } },
        { resource: Message, options: { navigation: contentNavigation } },
        { resource: Comment, options: { navigation: contentNavigation } },
        { resource: Notify, options: { navigation: contentNavigation } },
        { resource: Conversation, options: { navigation: contentNavigation } },
    ],
    branding: {
        companyName: "T-chat",
    },
    preventAssignment: true,
});

module.exports = adminRouter = AdminBroExpress.buildRouter(adminBro);
