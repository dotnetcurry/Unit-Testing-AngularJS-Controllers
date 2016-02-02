using System;
using System.Web.Mvc;

namespace NG_CtrlTestApp.Controllers
{
    public class JasmineController : Controller
    {
        public ViewResult Run()
        {
            return View("SpecRunner");
        }
    }
}
