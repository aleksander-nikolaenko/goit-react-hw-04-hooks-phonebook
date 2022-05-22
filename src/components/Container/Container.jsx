import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Container.module.css";

export class Container extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    return <div className={styles.container}>{children}</div>;
  }
}
