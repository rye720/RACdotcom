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
            //JS
            bundles.Add(new ScriptBundle("~/bundles/jQuery").Include("~/Scripts/jquery-{version}.js"));
            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                "~/Scripts/bootstrap.js"));
            bundles.Add(new ScriptBundle("~/bundles/customJS").Include("~/Scripts/custom.js"));
            //CSS
            bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/bootstrap.css",
                        "~/Content/custom.css", "~/Content/my-pixel-art.css"));
            BundleTable.EnableOptimizations = true;
        }
    }
}