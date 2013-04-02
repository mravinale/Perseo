using System;
using System.Web.Optimization;

[assembly: WebActivator.PostApplicationStartMethod(
    typeof(Perseo.Web.App_Start.PerseoConfig), "PreStart")]

namespace Perseo.Web.App_Start
{
    public static class PerseoConfig
    {
        public static void PreStart()
        {
            // Add your start logic here
            DurandalBundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}