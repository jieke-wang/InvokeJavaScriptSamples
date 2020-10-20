using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.NodeServices;

using Newtonsoft.Json.Linq;

namespace CoreMvcSamples.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly INodeServices nodeServices;

        public ValuesController(INodeServices nodeServices)
        {
            this.nodeServices = nodeServices;
        }

        // /api/values/sayhello?name=jieke
        public async Task<string> SayHelloAsync(string name)
        {
            string scriptPath = "./Scripts/hello_word";
            var result = await nodeServices.InvokeAsync<string>(scriptPath, name);
            return result;
        }

        // /api/values/add?x=1&y=2
        public async Task<double> AddAsync(double x, double y)
        {
            string scriptPath = "./Scripts/four_operations";
            var result = await nodeServices.InvokeExportAsync<double>(scriptPath, "add", x, y);
            return result;
        }

        // /api/values/subtract?x=1&y=2
        public async Task<double> SubtractAsync(double x, double y)
        {
            string scriptPath = "./Scripts/four_operations";
            var result = await nodeServices.InvokeExportAsync<double>(scriptPath, "subtract", x, y);
            return result;
        }

        // /api/values/multiplicati?x=1&y=2
        public async Task<double> MultiplicatiAsync(double x, double y)
        {
            string scriptPath = "./Scripts/four_operations";
            var result = await nodeServices.InvokeExportAsync<double>(scriptPath, "multiplicati", x, y);
            return result;
        }

        // /api/values/division?x=1&y=2
        public async Task<double> DivisionAsync(double x, double y)
        {
            string scriptPath = "./Scripts/four_operations";
            var result = await nodeServices.InvokeExportAsync<double>(scriptPath, "division", x, y);
            return result;
        }

        // /api/values/buildarray
        public async Task<string> BuildArrayAsync()
        {
            string scriptPath = "./Scripts/build_object";
            var result = await nodeServices.InvokeExportAsync<JArray>(scriptPath, "build_array", 1,'x', 0.1, double.NaN, null, "string", DateTime.Now, false, new[] { "y", "z" }, new { x = 1, y = 2, z = 3 });
            return result.ToString();
        }

        // /api/values/mergeobject
        public async Task<string> MergeObjectAsync()
        {
            string scriptPath = "./Scripts/build_object";
            //var result = await nodeServices.InvokeExportAsync<JObject>(scriptPath, "merge_object", 1, 'x', 0.1, double.NaN, null, "string", DateTime.Now, false, new[] { "y", "z" }, new { x = 1, y = 2, z = 3 });
            var result = await nodeServices.InvokeExportAsync<JObject>(scriptPath, "merge_object", new { x = 1, y = 2, z = 3 }, 1, 'x', 0.1, double.NaN, null, "string", DateTime.Now, false, new[] { "y", "z" });
            return result.ToString();
        }

        // /api/values/dependentmodule
        public async Task<string> DependentModuleAsync()
        {
            string scriptPath = "./Scripts/dependent_module";
            var result = await nodeServices.InvokeExportAsync<JArray>(scriptPath, "run_demo");
            return result.ToString();
        }
    }
}
