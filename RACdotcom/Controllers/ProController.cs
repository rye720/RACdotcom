using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RACdotcom.Controllers
{
    public class ProController : Controller
    {
        [HandleError]
        public ActionResult Pro()
        {
            return View();
        }
    }
}