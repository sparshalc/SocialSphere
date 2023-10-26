class Notification < ApplicationRecord
  include Noticed::Model
  belongs_to :recipient, polymorphic: true, dependent: :destroy
end
