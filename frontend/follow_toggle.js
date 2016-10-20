class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("follow-state");

    this.$el.on("click", (e) => {
      e.preventDefault();
      this.handle_click()
    });

    this.render();
  }

  render() {
    if (this.followState) {
      this.$el.text("Unfollow");
    } else {
      this.$el.text("Follow");
    };
  }

  handle_click() {
    let that = this;
    if (this.followState){
      $.ajax({
        url: `/users/${this.userId}/follow`,
        dataType: 'json',
        type: "DELETE",
        success() {
          that.followState = false;
          that.render();
        }
      })
    }
    else {
      $.ajax({
        url: `/users/${this.userId}/follow`,
        dataType: 'json',
        type: "POST",
        success() {
          that.followState = true;
          that.render();
          }
      })
    }
  }


}

module.exports = FollowToggle;
