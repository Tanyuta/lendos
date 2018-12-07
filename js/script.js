function toggleCollapse(e) {
      var li = e.parentElement;
      if ($(li).hasClass('selected')) {
        $(li)[0].className = $(li)[0].className.replace(/selected/, '');
      } else {
        $(li).addClass('selected');
      }
    }