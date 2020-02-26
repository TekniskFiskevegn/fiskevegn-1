import React from "react";
import Proptypes from "prop-types";
import { LOG_IS_ACTIVE } from "../../sytalaust";
import { log } from "../lib/helpers";
import { createLocaleTextGetter } from "../lib/createLocaleTextGetter";
function localize(Component) {
  // if (LOG_IS_ACTIVE) log("localize component", Component);
  return class Localize extends React.Component {
    static propTypes = {
      data: Proptypes.object,
      pageContext: Proptypes.shape({
        locale: Proptypes.string
      })
    };
    constructor(props) {
      super(props);
      this.getLocalizedContent = createLocaleTextGetter(this.props.pageContext.locale);
    }
    render() {
      return <Component {...this.props} data={this.getLocalizedContent(this.props.data)} />;
    }
  };
}
export default localize;
