const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
  {
    conversationId: { type: mongoose.Schema.Types.ObjectId, ref: "Conversation" },
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    receiverId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, required: true },
    fileUrl: {
      type: String,
      default: null, // URL of the uploaded file, if any
    },
    originalFileName: {
      type: String,
      default: null
    },
    fileSize: {
      type: Number,
      default: null
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Message', messageSchema);
