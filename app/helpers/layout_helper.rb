# These helper methods can be called in your template to set variables to be used in the layout
# This module should be included in all views globally,
# to do so you may need to add this line to your ApplicationController
#   helper :layout
module LayoutHelper
  def title(page_title)
    @content_for_title = page_title.to_s
  end
  
  # def admin_mainmenu_tag
  #   content_tag(:ul) do
  #     ['Contents', 'Users', 'Design', 'Setting'].collect do |item|
  #       content_tag(:li, :class => (item.downcase == @mainmenu ? 'selected' : '')) do
  #         link_to item.t, eval("#{item.downcase}_path")
  #       end
  #     end.join('')
  #   end
  # end
end