export const resolveSignupErrors = e => {
  /**
   * If the error doesn't contain response.data, the server hasn't sent back any
   * actionable error information.
   */
  if (!(e && e.response && e.response.data)) {
    return {};
  }

  const errors = e.response.data;

  /**
   * If the error is a string, it was caught by the User model validator.
   */
  if (typeof errors === 'string') {
    return {
      email: e.response.data
    };

    /**
     * Otherwise, the error is an array of ExpressValidatorErrors.
     */
  } else if (errors instanceof Array) {
    const expressValidatorErrors = e.response.data;
    return expressValidatorErrors.reduce(
      (acc, cur) => ({
        ...acc,
        [cur.param]: cur.msg
      }),
      {}
    );
  } else {
    return {};
  }
};
