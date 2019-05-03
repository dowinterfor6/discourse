require 'test_helper'

class Api::ServersControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get api_servers_show_url
    assert_response :success
  end

end
