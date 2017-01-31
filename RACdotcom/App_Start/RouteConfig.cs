using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace RACdotcom
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Home",
                url: "{controller}/{action}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
               name: "Pro",
               url: "{controller}/{action}",
               defaults: new { controller = "Pro", action = "Pro", id = UrlParameter.Optional }
           );

            routes.MapRoute(
               name: "Contact",
               url: "{controller}/{action}",
               defaults: new { controller = "Contact", action = "Contact", id = UrlParameter.Optional }
           );

        }
    }
}
