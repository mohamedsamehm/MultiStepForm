function ready(fn) {
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    setTimeout(fn, 1);
    document.removeEventListener("DOMContentLoaded", fn);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

ready(function () {
  // Global Constants

  const progressForm = document.getElementById("progress-form");

  const tabPanels = progressForm.querySelectorAll('[role="tabpanel"]');

  let currentStep = 0;

  // Form Validation

  /*****************************************************************************
   * Expects a string.
   *
   * Returns a boolean if the provided value *reasonably* matches the pattern
   * of a US phone number. Optional extension number.
   */

  const isValidPhone = (val) => {
    const regex = new RegExp(
      /^[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?$/
    );

    return regex.test(val);
  };

  document
    .getElementById("phone-number")
    .addEventListener("keypress", function (evt) {
      if (evt.which < 48 || evt.which > 57) {
        evt.preventDefault();
      }
    });

  document
    .querySelector("#services #other-service")
    .addEventListener("input", function (e) {
      const { target } = e;
      if (target.checked) {
        document
          .getElementById("other-service-input")
          .removeAttribute("hidden");
        document
          .getElementById("other-service-input")
          .setAttribute("name", "other-service");
      } else {
        document
          .getElementById("other-service-input")
          .setAttribute("hidden", true);
        document.getElementById("other-service-input").removeAttribute("name");
      }
    });

  document
    .querySelectorAll('#progress-form__panel-3 input[type="radio"]')
    .forEach((element) => {
      element.addEventListener("input", function (e) {
        const { target } = e;
        if (target.value == "Yes") {
          document
            .querySelector("#progress-form__panel-3 .form-group")
            .removeAttribute("hidden");
          document
            .querySelector("#progress-form__panel-3 .form-group input")
            .removeAttribute("hidden");
          document
            .querySelector("#progress-form__panel-3 .form-group input")
            .setAttribute("name", "website-url");
        } else {
          document
            .querySelector("#progress-form__panel-3 .form-group")
            .setAttribute("hidden", true);
          document
            .querySelector("#progress-form__panel-3 .form-group input")
            .setAttribute("hidden", true);
          document
            .querySelector("#progress-form__panel-3 .form-group input")
            .removeAttribute("name");
        }
      });
    });

  /*****************************************************************************
   * Expects a string.
   *
   * Returns a boolean if the provided value *reasonably* matches the pattern
   * of a real email address.
   *
   * NOTE: There is no such thing as a perfect regular expression for email
   *       addresses; further, the validity of an email address cannot be
   *       verified on the front end. This is the closest we can get without
   *       our own service or a service provided by a third party.
   *
   * RFC 5322 Official Standard: https://emailregex.com/
   */

  const isValidEmail = (val) => {
    const regex = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    return regex.test(val);
  };

  /*****************************************************************************
   * Expects a Node (input[type="text"] or textarea).
   */

  const validateText = (field) => {
    const val = field.value.trim();
    if (!field.hidden) {
      if (val === "" && field.required) {
        return {
          isValid: false,
        };
      } else {
        return {
          isValid: true,
        };
      }
    }
    return {
      isValid: true,
    };
  };
  function validURL(str) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  }
  const validateURL = (field) => {
    const val = field.value.trim();
    if (!field.hidden) {
      if (val === "" && field.required) {
        return {
          isValid: false,
        };
      } else {
        if (!validURL(val)) {
          return {
            isValid: false,
            message: "Please provide a valid url.",
          };
        }
      }
    }
    return {
      isValid: true,
    };
  };
  /*****************************************************************************
   * Expects a Node (fieldset).
   */

  const validateGroup = (fieldset) => {
    const choices = fieldset.querySelectorAll(
      'input[type="radio"], input[type="checkbox"]'
    );

    let isRequired = false,
      isChecked = false;

    for (const choice of choices) {
      if (choice.required) {
        isRequired = true;
      }

      if (choice.checked) {
        isChecked = true;
      }
    }

    if (!isChecked && isRequired) {
      return {
        isValid: false,
        message: "Please make a selection.",
      };
    } else {
      return {
        isValid: true,
      };
    }
  };

  /*****************************************************************************
   * Expects a Node (input[type="radio"] or input[type="checkbox"]).
   */

  const validateChoice = (field) => {
    return validateGroup(field.closest("fieldset"));
  };

  /*****************************************************************************
   * Expects a Node (input[type="tel"]).
   */

  const validatePhone = (field) => {
    const val = field.value.trim();

    if (val === "" && field.required) {
      return {
        isValid: false,
      };
    } else if (val !== "" && !isValidPhone(val)) {
      return {
        isValid: false,
        message: "Please provide a valid US phone number.",
      };
    } else {
      return {
        isValid: true,
      };
    }
  };

  /*****************************************************************************
   * Expects a Node (input[type="email"]).
   */

  const validateEmail = (field) => {
    const val = field.value.trim();

    if (val === "" && field.required) {
      return {
        isValid: false,
      };
    } else if (val !== "" && !isValidEmail(val)) {
      return {
        isValid: false,
        message: "Please provide a valid email address.",
      };
    } else {
      return {
        isValid: true,
      };
    }
  };

  /*****************************************************************************
   * Expects a Node (field or fieldset).
   *
   * Returns an object describing the field's overall validity, as well as
   * a possible error message where additional information may be helpful for
   * the user to complete the field.
   */

  const getValidationData = (field) => {
    switch (field.type) {
      case "text":
      case "textarea":
        return validateText(field);
      case "fieldset":
        return validateGroup(field);
      case "radio":
      case "checkbox":
        return validateChoice(field);
      case "tel":
        return validatePhone(field);
      case "email":
        return validateEmail(field);
      case "url":
        return validateURL(field);
      case "range":
        return {
          isValid: true,
        };
      default:
        throw new Error(
          `The provided field type '${field.tagName}:${field.type}' is not supported in this form.`
        );
    }
  };

  /*****************************************************************************
   * Expects a Node (field or fieldset).
   *
   * Returns the field's overall validity based on conditions set within
   * `getValidationData()`.
   */

  const isValid = (field) => {
    return getValidationData(field).isValid;
  };

  /*****************************************************************************
   * Expects an integer.
   *
   * Returns a promise that either resolves if all fields in a given step are
   * valid, or rejects and returns invalid fields for further processing.
   */

  const validateStep = (currentStep) => {
    const fields = tabPanels[currentStep].querySelectorAll(
      'fieldset, input:not([type="radio"]):not([type="checkbox"]) ,textarea'
    );
    const invalidFields = [...fields].filter((field) => {
      return !isValid(field);
    });

    return new Promise((resolve, reject) => {
      if (invalidFields && !invalidFields.length) {
        resolve();
      } else {
        reject(invalidFields);
      }
    });
  };

  // Form Error and Success

  const FIELD_PARENT_CLASS = "form__field",
    FIELD_ERROR_CLASS = "form__error-text";

  /*****************************************************************************
   * Expects a Node (fieldset) that contains any number of radio or checkbox
   * input elements, and a string representing the group's validation status.
   */

  function updateChoice(fieldset, status, errorId = "") {
    const choices = fieldset.querySelectorAll(
      '[type="radio"], [type="checkbox"]'
    );

    for (const choice of choices) {
      if (status) {
        choice.setAttribute("aria-invalid", "true");
        choice.setAttribute("aria-describedby", errorId);
      } else {
        choice.removeAttribute("aria-invalid");
        choice.removeAttribute("aria-describedby");
      }
    }
  }

  /*****************************************************************************
   * Expects a Node (field or fieldset) that either has the class name defined
   * by `FIELD_PARENT_CLASS`, or has a parent with that class name. Optional
   * string defines the error message.
   *
   * Builds and appends an error message to the parent element, or updates an
   * existing error message.
   *
   * https://www.davidmacd.com/blog/test-aria-describedby-errormessage-aria-live.html
   */

  function reportError(
    field,
    message = "Please complete this required field."
  ) {
    const fieldParent = field.closest(`.${FIELD_PARENT_CLASS}`);

    if (progressForm.contains(fieldParent)) {
      let fieldError = fieldParent.querySelector(`.${FIELD_ERROR_CLASS}`),
        fieldErrorId = "";

      if (!fieldParent.contains(fieldError)) {
        fieldError = document.createElement("p");

        if (field.matches("fieldset")) {
          fieldErrorId = `${field.id}__error`;

          updateChoice(field, true, fieldErrorId);
        } else if (field.matches('[type="radio"], [type="checkbox"]')) {
          fieldErrorId = `${field.closest("fieldset").id}__error`;

          updateChoice(field.closest("fieldset"), true, fieldErrorId);
        } else {
          fieldErrorId = `${field.id}__error`;

          field.setAttribute("aria-invalid", "true");
          field.setAttribute("aria-describedby", fieldErrorId);
        }

        fieldError.id = fieldErrorId;
        fieldError.classList.add(FIELD_ERROR_CLASS);

        fieldParent.appendChild(fieldError);
      }

      fieldError.textContent = message;
    }
  }

  /*****************************************************************************
   * Expects a Node (field or fieldset) that either has the class name defined
   * by `FIELD_PARENT_CLASS`, or has a parent with that class name.
   *
   * https://www.davidmacd.com/blog/test-aria-describedby-errormessage-aria-live.html
   */

  function reportSuccess(field) {
    const fieldParent = field.closest(`.${FIELD_PARENT_CLASS}`);

    if (progressForm.contains(fieldParent)) {
      const fieldError = fieldParent.querySelector(`.${FIELD_ERROR_CLASS}`);

      if (fieldParent.contains(fieldError)) {
        if (field.matches("fieldset")) {
          updateChoice(field, false);
        } else if (field.matches('[type="radio"], [type="checkbox"]')) {
          updateChoice(field.closest("fieldset"), false);
        } else {
          field.removeAttribute("aria-invalid");
          field.removeAttribute("aria-describedby");
        }

        fieldParent.removeChild(fieldError);
      }
    }
  }

  /*****************************************************************************
   * Expects a Node (field or fieldset).
   *
   * Reports the field's overall validity to the user based on conditions set
   * within `getValidationData()`.
   */

  function reportValidity(field) {
    const validation = getValidationData(field);

    if (!validation.isValid && validation.message) {
      reportError(field, validation.message);
    } else if (!validation.isValid) {
      reportError(field);
    } else {
      reportSuccess(field);
    }
  }

  // Form Progression

  /*****************************************************************************
   * Resets the state of all tabs and tab panels.
   */

  function deactivateTabs() {
    // Reset state of all panels
    tabPanels.forEach((panel) => {
      panel.classList.remove("fadeIn");
      panel.classList.add("fadeOut");
      panel.setAttribute("hidden", "");
    });
  }

  /*****************************************************************************
   * Expects an integer.
   *
   * Shows the desired tab and its associated tab panel, then updates the form's
   * current step to match the tab's index.
   */

  function activateTab(index, towards = 1) {
    const thisPanel = tabPanels[index];
    // increase progress bar
    let width = Math.floor(
      (document.querySelector(".progress-bar").offsetWidth /
        document.querySelector(".progress").offsetWidth) *
        100
    );
    console.log(width);
    if (towards == 1) {
      if (index == 1) {
        document.querySelector(".progress-bar").style.width = `${width + 15}%`;
      } else {
        document.querySelector(".progress-bar").style.width = `${width + 25}%`;
      }
    } else {
      if (index == 0) {
        document.querySelector(".progress-bar").style.width = `${width - 15}%`;
      } else {
        document.querySelector(".progress-bar").style.width = `${width - 25}%`;
      }
    }
    // Close all other tabs
    deactivateTabs();

    // Display the associated tab panel
    thisPanel.removeAttribute("hidden");
    thisPanel.classList.remove("fadeOut");
    thisPanel.classList.add("fadeIn");

    // Update the current step with the interacted tab's index value
    currentStep = index;
  }

  /*****************************************************************************
   * Expects an event from a keydown listener.
   */

  function arrowTab(e) {
    const { keyCode, target } = e;

    /**
     * If the current tab has an enabled next/previous sibling, activate it.
     * Otherwise, activate the tab at the beginning/end of the list.
     */

    const targetPrev = target.previousElementSibling,
      targetNext = target.nextElementSibling,
      targetFirst = target.parentElement.firstElementChild,
      targetLast = target.parentElement.lastElementChild;

    const isDisabled = (node) => node.hasAttribute("aria-disabled");

    switch (keyCode) {
      case 37: // Left arrow
        if (progressForm.contains(targetPrev) && !isDisabled(targetPrev)) {
          activateTab(currentStep - 1);
        }
        break;
      case 39: // Right arrow
        if (progressForm.contains(targetNext) && !isDisabled(targetNext)) {
          activateTab(currentStep + 1);
        } else if (!isDisabled(targetFirst)) {
          activateTab(0);
        }
        break;
    }
  }

  // Form Interactions

  /*****************************************************************************
   * Returns a function that only executes after a delay.
   *
   * https://davidwalsh.name/javascript-debounce-function
   */

  const debounce = (fn, delay = 500) => {
    let timeoutID;

    return (...args) => {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }

      timeoutID = setTimeout(() => {
        fn.apply(null, args);
        timeoutID = null;
      }, delay);
    };
  };

  /*****************************************************************************
   * Waits 0.5s before reacting to any input events. This reduces the frequency
   * at which the listener is fired, making the errors less "noisy". Improves
   * both performance and user experience.
   */

  progressForm.addEventListener(
    "input",
    debounce((e) => {
      const { target } = e;

      validateStep(currentStep)
        .then(() => {})
        .catch(() => {});

      // Display or remove any error messages
      reportValidity(target);
    })
  );

  /****************************************************************************/

  progressForm.addEventListener("click", (e) => {
    const { target } = e;

    if (target.matches('[data-action="next"]')) {
      validateStep(currentStep)
        .then(() => {
          // Progress to the next step
          activateTab(currentStep + 1);
        })
        .catch((invalidFields) => {
          // Show errors for any invalid fields
          invalidFields.forEach((field) => {
            reportValidity(field);
          });
          window.scrollTo(0, document.body.scrollHeight);

          // Focus the first found invalid field for the user
          invalidFields[0].focus();
        });
    }

    if (
      target.matches('[data-action="prev"]') ||
      target.parentElement.matches('[data-action="prev"]')
    ) {
      // Revisit the previous step
      activateTab(currentStep - 1, -1);
    }
  });

  // Form Submission

  /*****************************************************************************
   * Returns the user's IP address.
   */

  async function sendHook(
    data,
    url = "https://hook.us1.make.com/jtb39t9gkdl574jplekb5gvsnuxnf8eu"
  ) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // return response.ok;
  }

  /****************************************************************************/

  function disableSubmit() {
    const submitButton = progressForm.querySelector('[type="submit"]');

    if (progressForm.contains(submitButton)) {
      // Update the state of the submit button
      submitButton.setAttribute("disabled", "");
      submitButton.textContent = "Submitting...";
    }
  }

  /****************************************************************************/

  function handleSuccess() {
    const thankYou = progressForm.querySelector("#progress-form__thank-you");

    // Clear all HTML Nodes that are not the thank you panel
    while (progressForm.firstElementChild !== thankYou) {
      progressForm.removeChild(progressForm.firstElementChild);
    }

    thankYou.removeAttribute("hidden");

    document.getElementById("thanks-lottie").stop();
    setTimeout(() => {
      document.getElementById("thanks-lottie").play();
    }, 100);
  }

  /****************************************************************************/

  function handleError(error) {
    const submitButton = progressForm.querySelector('[type="submit"]');

    if (progressForm.contains(submitButton)) {
      const errorText = document.createElement("p");

      // Reset the state of the submit button
      submitButton.removeAttribute("disabled");
      submitButton.textContent = "Submit";

      // Display an error message for the user
      errorText.classList.add("m-0", "form__error-text");
      errorText.textContent = `Sorry, your submission could not be processed.
        Please try again. If the issue persists, please contact our support
        team. Error message: ${error}`;

      submitButton.parentElement.parentElement.append(errorText);
    }
  }

  /****************************************************************************/

  progressForm.addEventListener("submit", (e) => {
    // Prevent the form from submitting
    e.preventDefault();

    // Get the API endpoint using the form action attribute
    const form = e.currentTarget,
      API = new URL(form.action);

    validateStep(currentStep)
      .then(() => {
        // Indicate that the submission is working
        disableSubmit();

        // Prepare the data
        const formData = new FormData(form),
          formFields = {
            services: [],
          };

        // Format the data entries
        for (const [name, value] of formData) {
          if (name == "services") {
            formFields["services"].push(value);
          } else {
            formFields[name] = value;
          }
        }
        sendHook(formFields)
          .then(() => {
            setTimeout(() => {
              handleSuccess();
            }, 500); // An artificial delay to show the state of the submit button
          })
          .catch((error) => {
            setTimeout(() => {
              handleError(error);
            }, 500); // An artificial delay to show the state of the submit button
          });
      })
      .catch((invalidFields) => {
        // Show errors for any invalid fields
        invalidFields.forEach((field) => {
          reportValidity(field);
        });

        // Focus the first found invalid field for the user
        invalidFields[0].focus();
      });
  });

  class Slider {
    constructor(rangeElement, valueElement, options) {
      this.rangeElement = rangeElement;
      this.valueElement = valueElement;
      this.options = options;

      // Attach a listener to "change" event
      this.rangeElement.addEventListener("input", this.updateSlider.bind(this));
    }

    // Initialize the slider
    init() {
      this.rangeElement.setAttribute("min", options.min);
      this.rangeElement.setAttribute("max", options.max);
      this.rangeElement.value = options.cur;

      this.updateSlider();
    }

    // Format the money
    asMoney(value) {
      return (
        "AED " +
        parseFloat(value).toLocaleString("en-US", {
          maximumFractionDigits: 2,
        }) +
        "+"
      );
    }

    generateBackground(rangeElement) {
      if (this.rangeElement.value === this.options.min) {
        return;
      }

      let percentage =
        ((this.rangeElement.value - this.options.min) /
          (this.options.max - this.options.min)) *
        100;
      valueElement.style.left = `${
        ((this.rangeElement.value - this.options.min) / this.options.max) * 100
      }%`;
      if (window.innerWidth <= 730) {
        if (this.rangeElement.value < 10000) {
          document
            .querySelector(".range__value")
            .classList.remove("mobile-right");
          document.querySelector(".range__value").classList.add("mobile-left");
        } else {
          document
            .querySelector(".range__value")
            .classList.remove("mobile-left");
          document.querySelector(".range__value").classList.add("mobile-right");
        }
      } else {
        document
          .querySelector(".range__value")
          .classList.remove("mobile-right");
        document.querySelector(".range__value").classList.remove("mobile-left");
      }
      return (
        "background: linear-gradient(to right, #3022cd, #4A3AFF " +
        percentage +
        "%, #fff " +
        percentage +
        "%, #fff 100%)"
      );
    }
    updateSlider(newValue) {
      this.valueElement.innerHTML = this.asMoney(this.rangeElement.value);
      this.rangeElement.style = this.generateBackground(
        this.rangeElement.value
      );
    }
  }

  let rangeElement = document.querySelector('.range [type="range"]');
  let valueElement = document.querySelector(".range .range__value");

  let options = {
    min: 1000,
    max: 21000,
    cur: 7120,
  };

  if (rangeElement) {
    let slider = new Slider(rangeElement, valueElement, options);

    slider.init();
  }
});
