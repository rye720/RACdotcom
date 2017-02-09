using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RACdotcom.Controllers
{
    public class HomeController : Controller
    {
        // I believe this handles 500 internal server errors
        [HandleError]
        public ActionResult Index()
        {
            return View();
        }
    }
}