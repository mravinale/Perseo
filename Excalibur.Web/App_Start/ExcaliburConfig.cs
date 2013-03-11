using System;
using System.Web.Optimization;

[assembly: WebActivator.PostApplicationStartMethod(
    typeof(Excalibur.Web.App_Start.ExcaliburConfig), "PreStart")]

namespace Excalibur.Web.App_Start
{
    public static class ExcaliburConfig
    {
        public static void PreStart()
        {
            // Add your start logic here
            DurandalBundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}