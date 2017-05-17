require 'test_helper'

class QuestionsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get questions_create_url
    assert_response :success
  end

  test "should get destroy" do
    get questions_destroy_url
    assert_response :success
  end

  test "should get udpate" do
    get questions_udpate_url
    assert_response :success
  end

  test "should get show" do
    get questions_show_url
    assert_response :success
  end

end
