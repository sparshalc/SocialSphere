// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import BootstrapController from "./bootstrap_controller"
application.register("bootstrap", BootstrapController)

import BsModalController from "./bs_modal_controller"
application.register("bs-modal", BsModalController)

import FocusCommentController from "./focus_comment_controller"
application.register("focus-comment", FocusCommentController)

import HandleUploadController from "./handle_upload_controller"
application.register("handle-upload", HandleUploadController)

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import RemovalsController from "./removals_controller"
application.register("removals", RemovalsController)
