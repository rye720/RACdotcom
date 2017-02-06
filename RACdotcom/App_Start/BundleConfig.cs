using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace RACdotcom.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {

            //JavaScript

            bundles.Add(new ScriptBundle("~/bundles/jQuery").Include("~/Scripts/jquery-3.1.1.intellisense.js",
                        "~/Scripts/jquery-3.1.1.js"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include("~/Scripts/bootstrap.js",
                        "~/Scripts/bootstrap.min.js"
                        ));

            bundles.Add(new ScriptBundle("~/bundles/customJS").Include("~/Scripts/custom.js"));

            //CSS

            bundles.Add(new StyleBundle("~/bundles/css").Include("~/Content/bootstrap-theme.css",
                        "~/Content/bootstrap-theme.css.map",
                        "~/Content/bootstrap-theme.min.css",
                        "~/Content/bootstrap-theme.min.css.map",
                        "~/Content/bootstrap.css",
                        "~/Content/bootstrap.css.map",
                        "~/Content/bootstrap.min.css",
                        "~/Content/bootstrap.min.css.map",
                        "~/Content/custom.css"
                        ));

            BundleTable.EnableOptimizations = true;

        }
    }
}