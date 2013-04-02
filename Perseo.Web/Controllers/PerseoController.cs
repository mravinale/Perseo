using System.Web.Mvc;

namespace Perseo.Web.Controllers 
{
	public class PerseoController : Controller 
	{
		public ActionResult Index() 
		{
			return View();
		}
	}
}