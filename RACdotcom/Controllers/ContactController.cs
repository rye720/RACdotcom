using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RACdotcom.Controllers
{
    public class ContactController : Controller
    {
        [HandleError]
        public ActionResult Contact()
        {
            return View();
        }
    }
}