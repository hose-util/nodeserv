function route(handle, pathname) {
  //Handle favicon.ico
  if(pathname == "/favicon.ico")
    return;

  //Otherwise route request normally
  if (typeof handle[pathname] == 'function') {
    handle[pathname]();
  } else {
    console.log("No request handler found for " + pathname);
  }
}

exports.route = route;
