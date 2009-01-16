# Methods added to this helper will be available to all templates in the application.
module ApplicationHelper
  def menu_link_to(text, url_options = {}, html_options = {})
    if current_page?(url_options)
      html_options[:class] = 'active'
    end
    link_to(text, url_options, html_options)
  end
end
