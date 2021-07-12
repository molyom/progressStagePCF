function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var styles = {"container":"_1Lxpd","progressContainer":"_1vzPx","progress":"_2EqlW","circle":"_3PfrK","active":"_3sodH","current":"_35Ago","btn":"_1Pz2d","tltp":"_TTlp" };

var ReactMinimalProgressSteps = function ReactMinimalProgressSteps(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? [{
    id: 1,
    content: 'E'
  }] : _ref$data,
      _ref$selectedItemId = _ref.selectedItemId,
      selectedItemId = _ref$selectedItemId === void 0 ? 1 : _ref$selectedItemId,
      _ref$setSelectedItemI = _ref.setSelectedItemId,
      setSelectedItemId = _ref$setSelectedItemI === void 0 ? function () {} : _ref$setSelectedItemI,
      _ref$nextButtonText = _ref.nextButtonText,
      nextButtonText = _ref$nextButtonText === void 0 ? 'next' : _ref$nextButtonText,
      _ref$prevButtonText = _ref.prevButtonText,
      prevButtonText = _ref$prevButtonText === void 0 ? 'prev' : _ref$prevButtonText;

  var handleNext = function handleNext() {
    var newSelectedItemId;

    if (selectedItemId > data.length) {
      newSelectedItemId = data.length;
    } else {
      newSelectedItemId = selectedItemId + 10;
    }

    setSelectedItemId(newSelectedItemId);
  };

  var handlePrev = function handlePrev() {
    var newSelectedItemId;

    if (selectedItemId < 1) {
      newSelectedItemId = 1;
    } else {
      newSelectedItemId = selectedItemId - 1;
    }

    setSelectedItemId(newSelectedItemId);
  };

  var handleCircleClick = function handleCircleClick(item) {
    setSelectedItemId(item.Value);

  };

  return /*#__PURE__*/React.createElement("div", {
    className: styles.container,
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.progressContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.progress,
    style: {
      width: (selectedItemId - 1) / (data.length - 1) * 100 + "%", 
    }
  }), data.length >= 2 ? data.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      key: item.Value,
      className: styles.circle + " " + (selectedItemId > item.Id ? styles.active : selectedItemId == item.Id && styles.current),
      style: {backgroundColor: (item.Color.color= ""? "#FFFFFF": item.Color.color), 
      width: '15px',
      height: '15px',
      marginTop: '0px', 
      position:'relative'
  } ,
      onClick: function onClick() {
        return handleCircleClick(item);
      }
    },/*#__PURE__*/
    React.createElement("div", {
      className: styles.tltp
    },  item.Label));   
  }) : 'Your items should be more than 1'), 
  



  /*#__PURE__*/React.createElement("button", {
    className: styles.btn,
    disabled: selectedItemId === 1 ? true : false,
    onClick: handlePrev
  }, prevButtonText),
  
  /*#__PURE__*/React.createElement("button", {
    className: styles.btn,
    disabled: selectedItemId === data.length ? true : false,
    onClick: handleNext
  }, nextButtonText)
  
  
  );
};

module.exports = ReactMinimalProgressSteps;
//# sourceMappingURL=index.js.map
